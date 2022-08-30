import UserModel from "../models/user.js";
import AppError from "../utils/appError.js";
import catchAsync from "../utils/catchAsync.js";
import { filterObj } from "../utils/filterObj.js";

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
    "reviewingAs"
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
      },
    },
  });
});
