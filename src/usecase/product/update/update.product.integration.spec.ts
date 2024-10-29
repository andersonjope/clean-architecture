import { v4 as uuid } from "uuid";
import { Sequelize } from "sequelize-typescript";

import UpdateProductUseCase from "./update.produtct.usecase";
import ProductModel from "../../../infrastructure/product/repository/sequelize/product.model";
import ProductRepository from "../../../infrastructure/product/repository/sequelize/product.repository";
import Product from "../../../domain/product/entity/product";

describe("Unit test for product update use case", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: "memory",
      logging: false,
      sync: { force: true },
    });

    await sequelize.addModels([ProductModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });
  it("should update a product", async () => {
    const productRepository = new ProductRepository();
    const product = new Product(uuid(), "Product 1", 10);
    await productRepository.create(product);

    product.changeName("Product 2");

    await productRepository.update(product);

    const input = {
      id: product.id,
      name: product.name,
      price: product.price,
    };

    const usecase = new UpdateProductUseCase(productRepository);
    const output = await usecase.execute(input);

    expect(output).toEqual(input);
  });
});
