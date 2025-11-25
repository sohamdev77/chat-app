import { io } from "socket.io-client";

const socket = io("https://chat-app-backend-hpi0.onrender.com/socket.io", {
  transports: ["websocket"],
});

export default socket;
