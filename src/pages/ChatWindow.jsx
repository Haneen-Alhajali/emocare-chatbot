import React, { useState } from "react";
import "../assets/styles/chatWindow.css";
import logo from "../assets/images/emocare-logo.png";

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = () => {
    if (input.trim()) {
      setIsLoading(true);
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "This is a chatbot response.", sender: "bot" },
        ]);
        setIsLoading(false);
      }, 2000); // Simulate a 2-second delay
    }
  };

  return (
    <div className="chat-window">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.sender === "bot" && (
              <img src={logo} alt="EmoCare Logo" className="chat-logo" />
            )}
            <p>{msg.text}</p>
          </div>
        ))}
        {isLoading && (
          <div className="message bot">
            <img src={logo} alt="EmoCare Logo" className="chat-logo" />
            <p>Thinking...</p>
          </div>
        )}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;