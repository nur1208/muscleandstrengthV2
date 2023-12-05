import express from "express";
import {
  createTvShow,
  createTvShows,
  getDiscoverData,
  getTvCollect,
  getTvShows,
  geTvDetail,
} from "../controllers/tvShow.js";

const tvShowRouter = express.Router();

tvShowRouter.route("/").post(createTvShow).get(getTvShows);

tvShowRouter.route("/query/discover").get(getDiscoverData);
tvShowRouter.route("/query/tv_detail").post(geTvDetail);
tvShowRouter.route("/query/tv_collect").post(getTvCollect);

tvShowRouter.route("/many").post(createTvShows);

export default tvShowRouter;
