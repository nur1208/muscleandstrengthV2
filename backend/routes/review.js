import express from "express";
import {
  addProductId,
  createReview,
  createReviews,
  getReviews,
} from "../controllers/review.js";

const reviewRouter = express.Router();
reviewRouter
  .route("/")
  .post(createReview)
  .get(addProductId, getReviews);

reviewRouter.route("/many").post(createReviews);

export default reviewRouter;
