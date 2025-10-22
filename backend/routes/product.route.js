import express from "express";
import { createProduct, deleteProduct, getAllProducts, getFeaturedProducts } from "../controllers/product.controller.js";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", protectRoute, adminRoute, getAllProducts);
router.get("/featured",  getFeaturedProducts);
router.get("/", protectRoute, adminRoute, createProduct);
router.get("/:id", protectRoute, adminRoute, deleteProduct);





export default  router;