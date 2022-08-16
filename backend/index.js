import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import { router } from "./routes/home.js";
import productRouter from "./routes/product.js";
import globalErrorHandler, {
  handleWrongURL,
} from "./controllers/error.js";
import reviewRouter from "./routes/review.js";

dotenv.config();

const main = async () => {
  // MongoDB
  try {
    await mongoose
      // eslint-disable-next-line no-undef
      .connect(process.env.MONGODB_URL);

    console.log("Connected to DB");

    const app = express();
    const port = 4050;

    // TODO connect to that database then start the server.
    if (process.env.NODE_ENV.trim() === "development")
      app.use(morgan("dev"));

    app.use(express.json()); // support json encoded bodies
    // Setting up middleware
    app.use(cors());
    // app.use(express.static("public"));
    // app.use(initialize());

    // Routing
    app.use(router);
    app.use("/api/v1/products", productRouter);
    app.use("/api/v1/reviews", reviewRouter);

    // global error handlers
    app.all("*", handleWrongURL);
    app.use(globalErrorHandler);
    app.listen(port, () => {
      console.log(
        `express app listening at http://localhost:${port}`
      );
    });
  } catch (error) {
    console.log(error);
  }
};

main();
