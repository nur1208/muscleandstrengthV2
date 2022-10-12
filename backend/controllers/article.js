import ArticleModel from "../models/Article.js";
import catchAsync from "../utils/catchAsync.js";
import {
  createMany,
  createOne,
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
export const getArticles = getAll(ArticleModel);
export const getArticle = getOne(ArticleModel);
const allowedFields = ["type"];
export const updateArticle = updateOne(
  ArticleModel,
  allowedFields
);
