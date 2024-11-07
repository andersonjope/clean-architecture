import { v4 as uuid } from "uuid";

import ListProductUseCase from "./list.product.usecase";
import ProductModel from "../../../infrastructure/product/repository/sequelize/product.model";
import ProductRepository from "../../../infrastructure/product/repository/sequelize/product.repository";
import Product from "../../../domain/product/entity/product";
import { setupDatabase, cleanupDatabase } from "../../../database/database";

describe("Unit test for listing product use case", () => {
  beforeAll(async () => {
    await setupDatabase();
  });

  afterAll(async () => {
    await cleanupDatabase();
  });

  it("should list a product", async () => {
    const productRepository = new ProductRepository();
    const product1 = new Product(uuid(), "Product 1", 10);
    const product2 = new Product(uuid(), "Product 2", 20);

    await productRepository.create(product1);
    await productRepository.create(product2);

    const usecase = new ListProductUseCase(productRepository);

    const output = await usecase.execute({});

    expect(output.products.length).toBe(2);

    expect(output.products[0].id).toBe(product1.id);
    expect(output.products[0].name).toBe(product1.name);
    expect(output.products[0].price).toBe(product1.price);
    expect(output.products[1].id).toBe(product2.id);
    expect(output.products[1].name).toBe(product2.name);
    expect(output.products[1].price).toBe(product2.price);
  });
});
