import ProductFactory from "../../../domain/product/factory/product.factory";
import { app, sequelize } from "../express";
import request from "supertest";

describe("E2E test for product", () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it("should create a product", async () => {
    const product = ProductFactory.createWithoutType("Product 1", 10);

    const response = await request(app).post("/product").send({
      name: product.name,
      price: product.price,
    });

    expect(response.status).toBe(200);
    expect(response.body.name).toBe(product.name);
    expect(response.body.price).toBe(product.price);
  });

  it("should not create a product", async () => {
    const product = ProductFactory.createWithoutType("Product 1", 10);

    const response = await request(app).post("/product").send({
      name: product.name,
    });

    expect(response.status).toBe(500);
  });

  it("should list all products", async () => {
    const product1 = ProductFactory.createWithoutType("Product 1", 10);
    const product2 = ProductFactory.createWithoutType("Product 2", 20);

    const response1 = await request(app).post("/product").send({
      name: product1.name,
      price: product1.price,
    });
    expect(response1.status).toBe(200);

    const response2 = await request(app).post("/product").send({
      name: product2.name,
      price: product2.price,
    });
    expect(response2.status).toBe(200);

    const listResponse = await request(app).get("/product").send();

    expect(listResponse.status).toBe(200);
    expect(listResponse.body.products.length).toBe(2);
    const resProduct1 = listResponse.body.products[0];
    expect(resProduct1.name).toBe(product1.name);
    expect(resProduct1.price).toBe(product1.price);

    const resProduct2 = listResponse.body.products[1];
    expect(resProduct2.name).toBe(product2.name);
    expect(resProduct2.price).toBe(product2.price);
  });
});
