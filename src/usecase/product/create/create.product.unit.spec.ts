import CreateProductUseCase from "./create.product.usecase";

const input = {
  name: "Product",
  price: 10,
};

const MockRepository = () => {
  return {
    find: jest.fn(),
    findAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  };
};

describe("Unit test create product use case", () => {
  it("Should create a product", async () => {
    const productMock = MockRepository();
    const createProductUseCase = new CreateProductUseCase(productMock);

    const output = await createProductUseCase.execute(input);

    expect(output).toEqual({
      id: output.id,
      name: input.name,
      price: input.price,
    });
  });
});
