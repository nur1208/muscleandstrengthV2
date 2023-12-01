import EpisodeModel from "../models/Episode.js";
import {
  createOne,
  getAll,
  createMany,
} from "./handlerFactory.js";

export const createEpisode = createOne(EpisodeModel);
export const getEpisodes = getAll(EpisodeModel);

export const createEpisodes = createMany(EpisodeModel);
