import EpisodeModel from "../models/Episode.js";
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

export const geTvDetail = catchAsync(async (req, res, next) => {
  const { tvId } = req.body;

  let doc = await TvShowModel.findById(tvId).select(
    "-__v -createdAt -updatedAt"
  );

  const episode = await EpisodeModel.find({ tvId }).select(
    "-__v -createdAt -updatedAt"
  );

  const id = doc._id;
  doc._doc._id = undefined;
  res.status(201).json({
    resultCode: 0,
    errorCode: 0,
    errorMsg: "SUCCESS",
    dataResult: {
      tvInfo: {
        id,
        ...doc._doc,
        episodesInfos: episode.map((e) => ({
          episodesId: e._id,
          ...{ ...e._doc, _id: undefined },
        })),
      },
    },
  });
});

export const createTvShows = createMany(TvShowModel);
