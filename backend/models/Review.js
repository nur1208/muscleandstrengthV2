import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    productId: { type: mongoose.Types.ObjectId, ref: "Product" },
    rating: Number,
    ratingItems: [
      {
        rating: Number,
        label: String,
      },
    ],
    imgUrl: String,
    name: String,
    badges: [
      {
        iconId: String,
        label: String,
      },
    ],
    content: String,
    isVerifiedBuyers: { type: Boolean, default: false },
    helpful: String,
    dateOfCreation: Date,
  },
  {
    timestamps: true,
  }
);
const ReviewModel = mongoose.model(`Review`, schema);
export default ReviewModel;
