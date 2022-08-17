import ReviewModel from "../models/Review.js";
import catchAsync from "../utils/catchAsync.js";
import {
  createMany,
  createOne,
  getAll,
} from "./handlerFactory.js";

export const addProductId = catchAsync(
  async (req, res, next) => {
    if (req.query.productId)
      req.customFilter = { productId: req.query.productId };

    next();
  }
);

export const createReview = createOne(ReviewModel);
export const createReviews = createMany(ReviewModel);
export const getReviews = getAll(ReviewModel);
