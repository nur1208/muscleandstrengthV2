import ProductModel from "../models/Product.js";
import catchAsync from "../utils/catchAsync.js";
import {
  createOne,
  getAll,
  getOne,
  updateOne,
} from "./handlerFactory.js";

export const limitProductDetail = catchAsync(
  async (req, res, next) => {
    if (req.query.fields)
      req.query.fields = `${req.query.fields},-productDetail`;
    else req.query.fields = "-productDetail";

    next();
  }
);

export const createProduct = createOne(ProductModel);
export const getProduct = getOne(ProductModel);
export const getProducts = getAll(ProductModel, [
  "name",
  "brand.title",
]);
export const updateProduct = updateOne(ProductModel, [
  "type",
  "name",
  "category",
  "subCategory",
]);
