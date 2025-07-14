import express from "express";
import { protectRoute, adminRoute } from "../middleware/protectRoute.js";
import {
  getAllProducts,
  getFeaturedProducts,
  getProductsByCategory,
  createProduct,
  deleteProduct,
  toggleFeaturedProduct
} from "../controller/productController.js";

const router = express.Router();

router.get("/", protectRoute, getAllProducts);
router.get("/featured", getFeaturedProducts);
router.get("/category/:category", getProductsByCategory);

router.post("/", protectRoute, adminRoute, createProduct);
router.delete("/:id", protectRoute, adminRoute, deleteProduct);
router.patch("/:id", protectRoute, adminRoute, toggleFeaturedProduct);


export default router;