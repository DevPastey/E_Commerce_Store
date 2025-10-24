import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";
import cartRoutes from "./routes/cart.route.js";
import couponRoutes from "./routes/coupon.route.js";
import paymentRoutes from "./routes/payment.route.js";


import { connectDB } from "./lib/db.js";

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json()); // allows you to parse the body of the request
app.use(cookieParser()); //allows you access the cookies (req.cookies)

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/coupon", couponRoutes);
app.use("/api/payment", paymentRoutes);




connectDB().then(
    app.listen(5000, () => {
    console.log("server Up! on https://localhost:"+ PORT);
}) );