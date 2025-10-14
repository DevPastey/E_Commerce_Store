import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI);
        console.log(`monogoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log('Error connecting to MONGODB', error);
        process.exit(1);
    }
}