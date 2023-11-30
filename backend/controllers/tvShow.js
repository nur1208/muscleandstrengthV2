import TvShowModel from "../models/TvShow.js";
import {
  createOne,
  getAll,
  createMany,
} from "./handlerFactory.js";

export const createTvShow = createOne(TvShowModel);
export const getTvShows = getAll(TvShowModel);

export const createTvShows = createMany(TvShowModel);
