import { io } from "socket.io-client";

<<<<<<< HEAD
const socket = io("https://chat-app-backend-hpi0.onrender.com", {
    transports: ["websocket"],
    path: "/socket.io",
});

export default socket;
=======
const socket = io("https://chat-app-backend-hpi0.onrender.com/socket.io", {
  transports: ["websocket"],
});

export default socket;
>>>>>>> 0e1164b8e25d568d5f85890d5378961ad63a503a
