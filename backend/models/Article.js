import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    sourceUrl: { type: String, unique: true },
    imgUrl: [String],
    imgAlt: String,
    title: String,
    shortSummary: String,
    reads: Number,
    comments: Number,
    category: [String],
    type: String,
    isWorkout: Boolean,
    level: String,
    forGender: String,
    time: String,
    body: String,
  },
  {
    timestamps: true,
  }
);
const ArticleModel = mongoose.model(`Article`, schema);
export default ArticleModel;
