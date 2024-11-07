import { Sequelize } from "sequelize-typescript";
import ProductModel from "../infrastructure/product/repository/sequelize/product.model";
import CustomerModel from "../infrastructure/customer/repository/sequelize/customer.model";

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "memory",
  logging: false,
  models: [ProductModel, CustomerModel],
});

export const setupDatabase = async () => {
  await sequelize.sync({ force: true });
};

export const cleanupDatabase = async () => {
  await sequelize.drop();
};
