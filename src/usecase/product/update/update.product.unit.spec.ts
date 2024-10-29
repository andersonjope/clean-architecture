import ProductFactory from "../../../domain/product/factory/product.factory";
import UpdateProductUseCase from "./update.produtct.usecase";

const product = ProductFactory.createWithoutType("Product 1", 10);

const input = {
  id: product.id,
  name: "product 2",
  price: 20,
};

const MockRepository = () => {
  return {
    create: jest.fn(),
    findAll: jest.fn(),
    find: jest.fn().mockReturnValue(Promise.resolve(product)),
    update: jest.fn(),
  };
};

describe("Unit test for product update use case", () => {
  it("should update a product", async () => {
    const productRepository = MockRepository();
    const usecase = new UpdateProductUseCase(productRepository);

    const output = await usecase.execute(input);

    expect(output).toEqual(input);
  });
});
