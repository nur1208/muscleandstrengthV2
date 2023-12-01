import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    url: String,
  },
  {
    timestamps: true,
  }
);
const EpisodeModel = mongoose.model(`Episode`, schema);
export default EpisodeModel;
