import express from "express";
import http from "http";
import { Server } from "socket.io";
import redisClient from "./config/db.js";
import chatSocket from "./sockets/chatSocket.js";
import cors from "cors";

const app = express();
app.use(cors({ origin: "*", methods: ["GET", "POST"] }));
app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
    path: "/socket.io",
});

// API test
app.get("/", (req, res) => res.send("Chat server running"));

// SOCKET CONNECT
io.on("connection", (socket) => {
    console.log("User connected:", socket.id);
    chatSocket(socket, io);
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Backend running @ ${PORT}`));