import ProductModel from "../models/Product.js";
import catchAsync from "../utils/catchAsync.js";
import {
  count,
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
const searchBy = ["name", "brand.title"];
export const getProducts = getAll(ProductModel, searchBy);
export const countProducts = count(ProductModel, searchBy);
const allowedFields = [
  "type",
  "name",
  "category",
  "subCategory",
  "buyingOptions",
  "rank",
];
export const updateProduct = updateOne(
  ProductModel,
  allowedFields
);
