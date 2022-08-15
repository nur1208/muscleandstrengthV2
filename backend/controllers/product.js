import ProductModel from "../models/Product.js";
import catchAsync from "../utils/catchAsync.js";
import { createOne, getAll, getOne } from "./handlerFactory.js";

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
export const getProducts = getAll(ProductModel);
