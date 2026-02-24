import { Redis } from '@upstash/redis'
import dotenv from "dotenv"

 dotenv.config();
export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL,
  token: process.env.UPSTASH_REDIS_TOKEN,
})

// console.log(process.env.UPSTASH_REDIS_URL, process.env.UPSTASH_REDIS_TOKEN);

// redis.set("foo", "bar");
const res = await redis.get("foo");

console.log(res)
