import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ComingSoon from "./pages/ComingSoon";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Chatbot from "./pages/Chatbot";
// import "./assets/styles/animations.css";
import "./assets/styles/globals.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat" element={<Chatbot />} />

        {/* Routes for Coming Soon Pages */}
        <Route path="/doctor-chat" element={<ComingSoon />} />
        <Route path="/mood-tracker" element={<ComingSoon />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        
      </Routes>
    </Router>
  );
};

export default App;