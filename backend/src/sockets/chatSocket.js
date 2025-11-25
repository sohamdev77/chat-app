export default function chatSocket(socket, io) {
    console.log("Socket loaded:", socket.id);

    // RECEIVE MESSAGE FROM FRONTEND
    socket.on("message", (msg) => {
        console.log("Message received:", msg);

        // BROADCAST TO ALL USERS
        io.emit("message", msg);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
}