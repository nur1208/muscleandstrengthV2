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

export const getTvCollect = catchAsync(
  async (req, res, next) => {
    let doc = await TvShowModel.find().select(
      "-__v -createdAt -updatedAt"
    );

    res.status(201).json({
      resultCode: 0,
      errorCode: 0,
      errorMsg: "SUCCESS",
      dataResult: {
        collectTvInfos: doc.slice(0, 3).map((data) => ({
          tvInfo: { ...data._doc, id: data._id },
          lastEpisodesInfo: {
            episodesId: "656a9dd0b37734306ccab5f1",
            videoUrl:
              "https://v.pinimg.com/videos/mc/720p/f6/88/88/f68888290d70aca3cbd4ad9cd3aa732f.mp4",
            tvId: "656a755c68a69f08352996db",
            duration: 300000,
            title: "",
            isLock: true,
            coverUrl: "",
            price: 99,
            likeCount: 9999,
            userUnlock: true,
            userLike: false,
          },
        })),
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
