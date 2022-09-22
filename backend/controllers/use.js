import UserModel from "../models/user.js";
import AppError from "../utils/appError.js";
import catchAsync from "../utils/catchAsync.js";
import { filterObj } from "../utils/filterObj.js";

export const getMe = catchAsync(async (req, res, next) => {
  let query = UserModel.findById(req.user.id);

  query.populate({
    path: "cart.product",
    select: "imgUrl brand name buyingOptions",
  });

  const doc = await query;

  if (!doc) {
    return next(
      new AppError(
        `No document found with '${req.user.id}' ID`,
        404
      )
    );
  }

  res.status(200).json({
    status: "success",
    data: {
      cart: doc.cart,
    },
  });
});
export const updateMe = catchAsync(async (req, res, next) => {
  // 1) current error if the user posts password data

  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        "This route is not for password update please use /updateMyPassword",
        400
      )
    );
  }
  // 2) update user current data

  const filteredBody = filterObj(
    req.body,
    "firstName",
    "lastName",
    "reviewingAs",
    "cart",
    "cart.array.qty"
  );
  if (req.file) filteredBody.photo = req.file.filename;

  const updatedUser = await UserModel.findByIdAndUpdate(
    req.user.id,
    filteredBody,
    { new: true, runValidators: true }
  );

  res.status(200).json({
    status: "success",
    data: {
      user: {
        ...updatedUser._doc,
        id: updatedUser._doc._id,
        // cart: undefined,
      },
    },
  });
});
