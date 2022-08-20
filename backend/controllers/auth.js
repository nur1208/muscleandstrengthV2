import jwt from "jsonwebtoken";
import UserModel from "../models/user.js";
import catchAsync from "../utils/catchAsync.js";
const signToken = (id) => {
  const { JWT_SECRET, JWT_EXPIRES_IN } = process.env;

  return jwt.sign(
    {
      id,
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );
};
const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);

  const { firstName, lastName, gender, email, _id } = user;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user: {
        firstName,
        lastName,
        gender,
        email,
        id: _id,
      },
    },
  });
};

export const signUp = catchAsync(async (req, res) => {
  // make sure gender value is always lower case
  let genderLocal;
  if (req.body.gender) {
    genderLocal = req.body.gender.toLowerCase();
  }

  const newUser = await UserModel.create({
    ...req.body,
    gender: genderLocal,
  });

  createSendToken(newUser, 201, req, res);
});
