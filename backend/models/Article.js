import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    href: String,
    imgUrl: String,
    imgAlt: String,
    title: String,
    shortSummary: String,
    reads: Number,
    comments: Number,
    type: String,
    isWorkout: Boolean,
    level: String,
    forGender: String,
    time: String,
  },
  {
    timestamps: true,
  }
);
const ArticleModel = mongoose.model(`Article`, schema);
export default ArticleModel;
