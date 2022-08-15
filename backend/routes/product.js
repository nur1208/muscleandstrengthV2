import express from "express";
import { createProduct } from "../controllers/product.js";
const productRouter = express.Router();

productRouter.route("/").post(createProduct);

export default productRouter;
