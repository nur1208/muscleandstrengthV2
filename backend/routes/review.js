import express from "express";
import { createReview } from "../controllers/review.js";

const reviewRouter = express.Router();
reviewRouter.route("/").post(createReview);

export default reviewRouter;
