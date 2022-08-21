import jwt from "jsonwebtoken";
import UserModel from "../models/user.js";
import AppError from "../utils/appError.js";
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

export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // 1 check if email and password exist

  if (!email || !password) {
    return next(
      new AppError("please provide email and password", 400)
    );
  }

  // 2 check if a user exist and the password correct

  // email = c@c.com
  const user = await UserModel.findOne({ email }).select(
    "+password"
  );

  const isCorrectPassword = await user?.correctPassword(
    password,
    user.password
  );

  // 401 means unauthorized
  if (!user || !isCorrectPassword) {
    return next(
      new AppError("Incorrect email or password", 401)
    );
  }

  // 3 if the everything okay send the token to the clint

  createSendToken(user, 200, req, res);
});
