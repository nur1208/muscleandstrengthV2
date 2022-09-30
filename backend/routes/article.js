import express from "express";
import {
  createArticle,
  createArticles,
  getArticles,
} from "../controllers/article.js";

const articleRouter = express.Router();

articleRouter.route("/").post(createArticle).get(getArticles);
articleRouter.route("/many").post(createArticles);

export default articleRouter;
