import express from "express";
import {
  createProduct,
  getProduct,
  getProducts,
  limitProductDetail,
} from "../controllers/product.js";
const productRouter = express.Router();
productRouter
  .route("/")
  .post(createProduct)
  .get(limitProductDetail, getProducts);

productRouter.route("/:id").get(getProduct);

export default productRouter;
