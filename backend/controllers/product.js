import ProductModel from "../models/Product.js";
import { createOne } from "./handlerFactory.js";

export const createProduct = createOne(ProductModel);
