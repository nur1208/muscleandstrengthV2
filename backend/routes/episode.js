import express from "express";
import {
  createEpisode,
  createEpisodes,
  getEpisodes,
} from "../controllers/episode.js";

const episodeRouter = express.Router();

episodeRouter.route("/").post(createEpisode).get(getEpisodes);

episodeRouter.route("/many").post(createEpisodes);

export default episodeRouter;
