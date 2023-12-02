import express from "express";
import {
  createTvShow,
  createTvShows,
  getDiscoverData,
  getTvShows,
} from "../controllers/tvShow.js";

const tvShowRouter = express.Router();

tvShowRouter.route("/").post(createTvShow).get(getTvShows);

tvShowRouter.route("/query/discover").get(getDiscoverData);

tvShowRouter.route("/many").post(createTvShows);

export default tvShowRouter;
