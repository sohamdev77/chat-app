import dotenv from "dotenv";
dotenv.config();

import { createClient } from "redis";

const client = createClient({
    url: process.env.REDIS_URL,
    socket: {
        tls: true,
        rejectUnauthorized: false
    }
});

client.on("error", (err) => {
    console.error("Redis Client Error:", err);
});

await client.connect();

console.log("Connected to Upstash Redis");

export default client;
