import React, { useEffect, useState, useRef } from "react";
import socket from "./socket";
import "./style.css";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    socket.on("message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => socket.off("message");
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    socket.emit("message", input);
    setInput("");
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h1>⚡ PickAxe Chatroom</h1>
      </div>

      <div className="chat-box">
        {messages.map((msg, i) => (
          <div key={i} className="chat-message">
            {msg}
          </div>
        ))}
        <div ref={bottomRef}></div>
      </div>

      <div className="chat-input-area">
        <input
          className="chat-input"
          placeholder="Type something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="send-btn" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}
