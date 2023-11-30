import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    imgurl: String,
    title: String,
    episode: { current: Number, total: Number },
  },
  {
    timestamps: true,
  }
);
const TvShowModel = mongoose.model(`TvShow`, schema);
export default TvShowModel;
