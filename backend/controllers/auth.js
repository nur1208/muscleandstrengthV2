import { promisify } from "util";

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

export const protect = catchAsync(async (req, res, next) => {
  let token;

  // 1 getting token and check if it's there
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(
      new AppError(
        "you are not logged in! Please log in to get access",
        401
      )
    );
  }
  // 2 verification token
  const decode = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET
  );

  // 3 check if user still exists
  const currentUser = await UserModel.findById(decode.id);
  // if the user deleted after we send him a token
  // and before the token expired
  if (!currentUser) {
    return next(
      new AppError(
        "The user belonging to this token does no longer exist",
        401,
        "TokenExpiredError"
      )
    );
  }

  // grant access to protected route
  req.user = currentUser;
  next();
});
