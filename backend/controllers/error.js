/**
 * @file
 * file for handle all the expect error in our server
 */

import AppError from "../utils/appError.js";

/**
 * - handling mongoose CastError
 * - that will happened when a wrong document's _id passed to the model
 */
const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}`;

  return new AppError(message, 400);
};

/**
 *  handling mongoose duplicate fields for unique fields
 *
 */
const handleDuplicateFieldsDB = (err) => {
  const value = err.message.match(
    /(["'])(?:(?=(\\?))\2.)*?\1/
  )[0];
  // const value = err.keyValue.name;

  const message = `Duplicate field value: '${value}' please use another value`;
  // 400 means bad request
  return new AppError(message, 400);
};

/**
 * handling mongoose validation error failed that we set in a schema
 *
 */
const handleValidationErrorDB = (err) => {
  // loop through object
  const errors = Object.values(err.errors).map(
    (el) => el.message
  );
  const message = `invalid input Data. ${errors.join(", ")}`;
  return new AppError(message, 400);
};

/**
 * - handling Json web token error
 * - that will happen when the user passed invalid jwt
 */
const handleJWTError = () =>
  new AppError("Invalid token, Please login again", 401);

/**
 * - handling expired token error
 * - that will happen when the user passed expired token
 */
const handleJWTExpired = () =>
  new AppError(
    "Your token has expired! please login again",
    401
  );

/**
 *  - handling expired token error
 * - that will happen when the user passed token has created before the user change his/her password
 */
const handleJWTRecentlyCPError = () =>
  new AppError(
    "User recently changed password! Please log in again",
    401
  );

/**
 * send long error with all the details to the developer
 */
const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    // console.error("error", err);

    res.status(err.statusCode).json({
      status: "error",
      message: "something went wrong",
    });
  }
};

/**
 * - globalErrorHandler middleware for handling any expect error in our server
 * - it's error middleware and express knows that by looking at the number of parameters of the middleware if it is 4 parameters then this is error middleware
 */
const globalErrorHandler = (err, req, res, next) => {
  // status code, default is 500
  err.statusCode = err.statusCode || 500;
  // status , default is error
  err.status = err.status || "error";

  debugger;
  // send long more detailed error to the developer.
  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
    // send short error and readable to the users
  } else if (process.env.NODE_ENV === "production") {
    // it's good practice not to modify function's parameters
    let error = { ...err };
    error.message = err.message;
    error.name = err.name;

    // handling mongoose CastError
    // that will happened when a wrong document's _id passed to the model
    if (error.name === "CastError") {
      error = handleCastErrorDB(error);
    }

    // handling mongoose duplicate fields for unique fields
    if (error.code === 11000) {
      error = handleDuplicateFieldsDB(error);
    }

    // handling mongoose validation error failed that we set
    // in a schema
    if (
      error._message &&
      error._message.includes("validation failed")
    ) {
      error = handleValidationErrorDB(error);
    }

    // handling Json web token error
    // that will happen when the user passed invalid jwt
    if (error.name === "JsonWebTokenError") {
      error = handleJWTError();
    }

    // handling expired token error
    // that will happen when the user passed expired token
    if (error.name === "TokenExpiredError") {
      error = handleJWTExpired();
    }

    // handling recently changed password
    if (error.name === "TokenRecentlyChangedPasswordError") {
      error = handleJWTRecentlyCPError();
    }

    // send to a error to the developer
    sendErrorProd(error, res);
  }
};

export default globalErrorHandler;

export const handleWrongURL = (req, res, next) => {
  next(
    new AppError(
      `can't find ${req.originalUrl} on this server`,
      404
    )
  );
};
