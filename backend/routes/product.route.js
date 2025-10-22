import express from "express";
import router from "./auth.route";

router = express.Router();

router.get("/", getAllProducts)

export default  router;