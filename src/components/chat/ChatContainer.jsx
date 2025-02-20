import React, { useState } from "react";
import "../../assets/styles/chatWindow.css";

const ChatContainer = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isListening, setIsListening] = useState(false);

  const handleVoiceInput = () => {
    setIsListening((prev) => !prev);
  };

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: "user" };
      setMessages([...messages, userMessage]);
      setInput("");

      // Simulate AI response with "thinking..." animation
      setTimeout(() => {
        const aiThinking = { text: "Thinking...", sender: "ai-thinking" };
        setMessages((prevMessages) => [...prevMessages, aiThinking]);

        setTimeout(() => {
          const aiResponse = {
            text: `Hello! I'm EmoCare. You asked: "${input}"`,
            sender: "ai",
          };
          setMessages((prevMessages) =>
            prevMessages.filter((msg) => msg.sender !== "ai-thinking").concat(aiResponse)
          );
        }, 1500);
      }, 1000);
    }
  };

  return (
    <div className="chat-container">
      <div className="container-content">
        <h1>EmoCare Chatbot</h1>

        {messages.length === 0 ? (
          <div className="container-card">
            <div className="one">
              <div className="s-size">
                <i className="bi bi-lightbulb"></i>
                <p>Examples</p>
              </div>
              <div className="chat-card">"How can I manage stress effectively?"</div>
              <div className="chat-card">"What are some coping strategies for anxiety?"</div>
              <div className="chat-card">"Can you suggest mindfulness exercises?"</div>
            </div>

            <div className="one">
              <div className="s-size flex">
                <i className="bi bi-lightning-charge"></i>
                <p>Capabilities</p>
              </div>
              <div className="chat-card">Provides mental health support and resources</div>
              <div className="chat-card">Offers coping mechanisms and self-care tips</div>
              <div className="chat-card">Trained to handle sensitive topics with care</div>
            </div>

            <div className="one">
              <div className="s-size flex">
                <i className="bi bi-exclamation-triangle"></i>
                <p>Limitations</p>
              </div>
              <div className="chat-card">Not a replacement for expert advice</div>
              <div className="chat-card">May occasionally provide general information</div>
              <div className="chat-card">Limited to pre-trained knowledge and resources</div>
            </div>
          </div>
        ) : (
          <div className="messages-box">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.sender === "ai" && <img src="/favicon.ico" alt="AI Avatar" className="ai-avatar" />}
                <p>{msg.text}</p>
              </div>
            ))}
          </div>
        )}

        <div className="sms-container">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            rows="1"
            onInput={(e) => {
              e.target.style.height = "auto";
              e.target.style.height = e.target.scrollHeight + "px";
            }}
          ></textarea>
          <button onClick={handleVoiceInput} className={`voice-button ${isListening ? "active" : ""}`}>
            <i className={`bi ${isListening ? "bi-mic-fill" : "bi-mic"}`}></i>
          </button>
          <button onClick={handleSend} className="send-button">
            <i className="bi bi-send"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
