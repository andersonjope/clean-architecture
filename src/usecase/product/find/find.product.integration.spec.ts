import { v4 as uuid } from "uuid";
import Product from "../../../domain/product/entity/product";
import FindProductUseCase from "./find.product.usecase";
import ProductModel from "../../../infrastructure/product/repository/sequelize/product.model";
import ProductRepository from "../../../infrastructure/product/repository/sequelize/product.repository";
import { setupDatabase, cleanupDatabase } from "../../../database/database";

describe("Unit test find product use case", () => {
  beforeAll(async () => {
    await setupDatabase();
  });

  afterAll(async () => {
    await cleanupDatabase();
  });

  it("should find a product", async () => {
    const productRepository = new ProductRepository();
    const product = new Product(uuid(), "Product 1", 10);

    await productRepository.create(product);

    const input = {
      id: product.id,
    };

    const output = {
      id: product.id,
      name: product.name,
      price: product.price,
    };

    const usecase = new FindProductUseCase(productRepository);
    const result = await usecase.execute(input);

    expect(result).toEqual(output);
  });
});
