import express from "express";
import {
  createArticle,
  createArticles,
  getArticle,
  getArticles,
  limitBodyParam,
  updateArticle,
} from "../controllers/article.js";

const articleRouter = express.Router();

articleRouter
  .route("/")
  .post(createArticle)
  .get(limitBodyParam, getArticles);
articleRouter.route("/many").post(createArticles);
articleRouter.route("/:id").get(getArticle).put(updateArticle);

export default articleRouter;
