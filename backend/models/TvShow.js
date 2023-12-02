import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    coverUrl: String,
    title: String,
    episodesCount: Number,
    publishTime: String,
    type: String,
    desc: String,
  },
  {
    timestamps: true,
  }
);
const TvShowModel = mongoose.model(`TvShow`, schema);
export default TvShowModel;
