import express from "express";
import router from "./cart.route";
import { protectRoute } from "../middleware/auth.middleware.js";
import { createCheckoutSession } from "../controllers/createCheckoutSession.controller.js";

router = express.Router();

router.post("/create-checkout-session", protectRoute, createCheckoutSession);

export default router;