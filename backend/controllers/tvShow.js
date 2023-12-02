import TvShowModel from "../models/TvShow.js";
import catchAsync from "../utils/catchAsync.js";
import {
  createOne,
  getAll,
  createMany,
} from "./handlerFactory.js";

export const createTvShow = createOne(TvShowModel);
export const getTvShows = getAll(TvShowModel);

export const getDiscoverData = catchAsync(
  async (req, res, next) => {
    let doc = await TvShowModel.find().select(
      "-__v -createdAt -updatedAt"
    );

    res.status(201).json({
      resultCode: 0,
      errorCode: 0,
      errorMsg: "SUCCESS",
      dataResult: {
        mostPopularInfos: doc,
        mostTrendingInfos: doc.slice(0, 3),
        NormalListInfos: doc,
      },
    });
  }
);

export const createTvShows = createMany(TvShowModel);
