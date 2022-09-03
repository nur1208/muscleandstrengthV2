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
    sourceUrl: { type: String, unique: true },
    tagline: String,
    category: [String],
    subCategory: [String],
    features: [String],
    isInStock: Boolean,
    ratingPercentage: Number, //this field is temporary
    reviewsNum: Number, //this field is temporary
    type: [String],
    buyingOptions: [
      {
        cost: {
          beforeDiscount: { type: Number },
          regularPrice: { type: Number },
        },
        title: { type: String },
        serving: { type: Number },
        deal: { type: String },
        options: [{ title: { type: String } }],
      },
    ],
    productDetail: {
      deals: [
        {
          imgUrl: { type: String },
          label: { type: String },
          desc: { type: String },
        },
      ],
      nutrition: [
        {
          title: { type: String },
          servingSize: { type: Number },
          servingsPerContainer: { type: Number },
          infoTable: [
            {
              mainStyle: { type: String },
              innerIs3Cols: { type: Boolean },
              cols: [
                {
                  hasChildren: { type: Boolean },
                  text: { type: String },
                  children: [
                    {
                      style: { type: String },
                      text: { type: String },
                    },
                  ],
                },
              ],
            },
          ],
          ingredients: { type: String },
          allergenWarning: { type: String },
          directions: { type: String },
          warning: { type: String },
        },
      ],
      productInfo: [
        {
          type: { type: String },
          text: { type: String },
          style: { type: String },
          mainStyle: { type: String },
          videId: { type: String },
          hasChildren: { type: Boolean },
          imgUrl: { type: String },
          alt: { type: String },
          isFullWidthMobile: { type: Boolean },
          child: {
            type: { type: String },
            imgUrl: { type: String },
            alt: { type: String },
            isFullWidthMobile: { type: Boolean },
            lis: { type: [String] },
          },
        },
      ],
      reviewsOverall: {
        overallRating: {
          width: { type: Number },
          parentage: { type: Number },
        },
        reviews: { type: Number },
        verifiedBuyers: { type: Number },
        graphBar: [
          {
            title: { type: String },
            percentage: { type: Number },
          },
        ],
        ratedFlavors: [
          {
            title: { type: String },
            percentage: { type: Number },
          },
        ],
      },
    },
  },
  {
    timestamps: true,
  }
);
const ProductModel = mongoose.model(`Product`, schema);
export default ProductModel;
