import express from "express";
import { login, protect, signUp } from "../controllers/auth.js";
import { updateMe } from "../controllers/use.js";

const userRouter = express.Router();

userRouter.post("/signup", signUp);
userRouter.post("/login", login);

userRouter.use(protect);

userRouter.route("/").put(updateMe);
export default userRouter;
