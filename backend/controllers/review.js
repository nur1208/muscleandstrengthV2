import ReviewModel from "../models/Review.js";
import { createOne } from "./handlerFactory.js";

export const createReview = createOne(ReviewModel);
