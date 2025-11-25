import { io } from "socket.io-client";

const socket = io("https://chat-app-backend-hpi0.onrender.com", {
    transports: ["websocket"],
    path: "/socket.io",
});

export default socket;