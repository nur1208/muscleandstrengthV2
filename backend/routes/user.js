import express from "express";
import { signUp } from "../controllers/auth.js";

const userRouter = express.Router();

userRouter.post("/signup", signUp);

export default userRouter;
