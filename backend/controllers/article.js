import ArticleModel from "../models/Article.js";
import {
  createMany,
  createOne,
  getAll,
} from "./handlerFactory.js";

export const createArticle = createOne(ArticleModel);
export const createArticles = createMany(ArticleModel);
export const getArticles = getAll(ArticleModel);
