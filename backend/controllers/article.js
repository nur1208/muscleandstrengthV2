import ArticleModel from "../models/Article.js";
import catchAsync from "../utils/catchAsync.js";
import {
  createMany,
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from "./handlerFactory.js";

export const limitBodyParam = catchAsync(
  async (req, res, next) => {
    if (req.query.fields)
      req.query.fields = `${req.query.fields},-body`;
    else req.query.fields = "-body";

    next();
  }
);

export const createArticle = createOne(ArticleModel);
export const createArticles = createMany(ArticleModel);
const searchBy = ["sourceUrl"];
export const getArticles = getAll(ArticleModel, searchBy);
export const getArticle = getOne(ArticleModel);
const allowedFields = ["type", "imgUrl", "hasHeaderVideo"];
export const updateArticle = updateOne(
  ArticleModel,
  allowedFields
);

export const deleteArticle = deleteOne(ArticleModel);
