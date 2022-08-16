import express from "express";
import {
  createReview,
  createReviews,
} from "../controllers/review.js";

const reviewRouter = express.Router();
reviewRouter.route("/").post(createReview);
reviewRouter.route("/many").post(createReviews);

export default reviewRouter;
