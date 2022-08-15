import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    imgUrl: {
      400: { type: String },
      600: { type: String },
      700: { type: String },
    },
    brand: {
      title: { type: String },
      //   add it later
      //   id: { type: mongoose.Schema.Types.ObjectId, ref: "Brand" },
    },
    name: String,
    tagline: String,
    features: [String],
    ratingPercentage: Number, //this field is temporary
    reviewsNum: Number, //this field is temporary
    deals: [
      {
        imgUrl: { type: String },
        label: { type: String },
        desc: { type: String },
      },
    ],
    type: String,
  },
  {
    timestamps: true,
  }
);
const ProductModel = mongoose.model(`Product`, schema);
export default ProductModel;
