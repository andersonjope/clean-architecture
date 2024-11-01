import { v4 as uuid } from "uuid";
import CreateProductUseCase from "./create.product.usecase";
import ProductModel from "../../../infrastructure/product/repository/sequelize/product.model";
import ProductRepository from "../../../infrastructure/product/repository/sequelize/product.repository";
import Product from "../../../domain/product/entity/product";
import sequelize from "../../../database/database";

describe("Unit test create product use case", () => {
  beforeEach(async () => {
    await sequelize.addModels([ProductModel]);
    await sequelize.sync();
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it("Should create a product", async () => {
    const productRepository = new ProductRepository();
    const product = new Product(uuid(), "Product 1", 10);

    await productRepository.create(product);

    const input = {
      id: product.id,
      name: product.name,
      price: product.price,
    };

    const useCase = new CreateProductUseCase(productRepository);
    const output = await useCase.execute(input);

    expect(output).toEqual({
      id: output.id,
      name: output.name,
      price: output.price,
    });
  });
});
