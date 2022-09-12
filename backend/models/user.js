import mongoose from "mongoose";
import bcrypt from "bcrypt";
// import crypto from "crypto";

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    goal: { type: String },
    trainingExperience: { type: String },
    referralCode: { type: String },
    reviewingAs: { type: String },
    isNotified: { type: Boolean, default: false },
    gender: { type: String, enum: ["male", "female"] },
    password: { type: String, required: true, select: false },
    cart: [
      {
        product: {
          type: mongoose.Types.ObjectId,
          ref: "Product",
        },
        qty: { type: Number, default: 1 },
        buyingOptionId: { type: mongoose.Types.ObjectId },
        selectedFlavor: { type: String },
      },
    ],
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password") || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});

userSchema.pre("save", async function (next) {
  // only run this function if password was actually. modified
  if (!this.isModified("password")) return next();

  // hash the password with const of 12
  this.password = await bcrypt.hash(this.password, 12);

  next();
});

userSchema.pre(/^find/, function (next) {
  this.populate({
    path: "cart.product",
    select: "imgUrl brand name buyingOptions",
  });

  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

// userSchema.methods.createPasswordRestToken = function () {
//   const resetToken = crypto.randomBytes(32).toString("hex");

//   this.passwordResetToken = crypto
//     .createHash("sha256")
//     .update(resetToken)
//     .digest("hex");

//   const now = Date.now() + 20 * 60 * 1000;
//   this.passwordResetExpires = now;

//   return resetToken;
// };
const UserModel = mongoose.model("User", userSchema);

export default UserModel;
