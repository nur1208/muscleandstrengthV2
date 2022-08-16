import ReviewModel from "../models/Review.js";
import { createMany, createOne } from "./handlerFactory.js";

export const createReview = createOne(ReviewModel);
export const createReviews = createMany(ReviewModel);
