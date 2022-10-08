import express from "express";
import {
  createArticle,
  createArticles,
  getArticles,
  limitBodyParam,
} from "../controllers/article.js";

const articleRouter = express.Router();

articleRouter
  .route("/")
  .post(createArticle)
  .get(limitBodyParam, getArticles);
articleRouter.route("/many").post(createArticles);

export default articleRouter;
