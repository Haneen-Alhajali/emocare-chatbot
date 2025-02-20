import React from "react";
import Sidebar from "../components/chat/Sidebar";
import ChatContainer from "../components/chat/ChatContainer";
import "../assets/styles/chatWindow.css";

const Chatbot = () => {
  return (
    <section className="ChatSection">
      <Sidebar />
      <ChatContainer />
    </section>
  );
};

export default Chatbot;