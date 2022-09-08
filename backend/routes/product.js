import express from "express";
import {
  countProducts,
  createProduct,
  getProduct,
  getProducts,
  limitProductDetail,
  updateProduct,
} from "../controllers/product.js";
const productRouter = express.Router();
productRouter
  .route("/")
  .post(createProduct)
  .get(limitProductDetail, getProducts);
productRouter.get("/count", countProducts);
productRouter.route("/:id").get(getProduct).put(updateProduct);

export default productRouter;
