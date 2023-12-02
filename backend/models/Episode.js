import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    videoUrl: String,
    tvId: { type: mongoose.Types.ObjectId, ref: "TvShow" },
    duration: Number,
    title: String,
    isLock: Boolean,
    coverUrl: String,
    price: Number,
    likeCount: Number, //将 user_like 和 start_like 累加
    userUnlock: Boolean, //用户是否将其解锁 Has the user unlocked it
    userLike: Boolean, //用户是否喜欢 Does the user like it
  },
  {
    timestamps: true,
  }
);

schema.pre("save", function (next) {
  this.episodesId = this._id;
  next();
});

schema.pre("find", function (next) {
  console.log("heress");

  this.episodesId = this._id;
  this.episodesIdd = this._id;
  next();
});
const EpisodeModel = mongoose.model(`Episode`, schema);
export default EpisodeModel;
