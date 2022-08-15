import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import { router } from "./routes/home.js";

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
    // app.use(morgan("dev"));
    app.use(express.json()); // support json encoded bodies
    // app.use(express.urlencoded({ extended: true })); // support encoded bodies
    // app.use(express.cookieParser());
    // app.use(cookieParser());
    // Setting up middleware
    // app.use(cors("http://localhost:3000"));
    // app.use(express.static("public"));
    // app.use(initialize());

    // app.get("/", (req, res) => {
    //   res.send("working");
    // });

    // app.get("/api/v1/news", (req, res) => {
    //   res.send("working");
    // });

    // Routing
    app.use(router);
    // app.use("/api/v1/news", newsRouter);
    // app.use("/api/v1/companies", companyRouter);
    // app.use("/api/v1/questions", questionRouter);
    // app.use(
    //   "/api/v1/unknownKeywords",
    //   unknownKeywordForCompanyRouter
    // );
    // app.use("/api/v1/testedStrategy", strategyTestedRouter);
    // app.use("/api/v1/users", userRouter);

    // app.use(globalErrorHandler);
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
