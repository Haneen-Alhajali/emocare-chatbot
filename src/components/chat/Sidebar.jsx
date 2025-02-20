import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/sidebar.css";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setIsCollapsed(true); // Collapse sidebar after navigation
  };

  // Automatically collapse sidebar on small devices
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Toggle Button (Always visible) */}
      <button
        className="toggle-sidebar"
        onClick={toggleSidebar}
        style={{ left: isCollapsed ? "10px" : "290px" }} /* Dynamic position */
      >
        <i className={`bi ${isCollapsed ? "bi-chevron-right" : "bi-chevron-left"}`}></i>
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
        {/* New Chat Button at the Top */}
        <div className="sidebar-top">
          <button
              className="sidebar-button animated-button"
              onClick={() => handleNavigate("/chat")}
            >
              <i className="bi bi-plus-circle"></i>
              <span>New chat</span>
            </button>
        </div>

        {/* Slider Content */}
        <div className="slider-content">
          <div className="one-his">
            <p>Today</p>
            <div className="search">
              <i className="bi bi-chat-left"></i>
              <p>Stress Management Tips</p>
            </div>
          </div>
          <div className="one-his">
            <p>Yesterday</p>
            <div className="search">
              <i className="bi bi-chat-left"></i>
              <p>Mindfulness Exercises</p>
            </div>
          </div>
          <div className="one-his">
            <p>1 Week ago</p>
            <div className="search">
              <i className="bi bi-chat-left"></i>
              <p>Coping with Anxiety</p>
            </div>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="sidebar-bootom">
          <div className="sidebar-buttons">
            <button
              className="sidebar-button animated-button"
              onClick={() => handleNavigate("/mood-tracker")}
            >
              <i className="bi bi-emoji-smile"></i>
              <span>Mood Tracker</span>
            </button>
            <button
              className="sidebar-button animated-button"
              onClick={() => handleNavigate("/doctor-chat")}
            >
              <i className="bi bi-person-lines-fill"></i>
              <span>Doctor Chat</span>
            </button>
            <button
              className="sidebar-button upgrade-button"
              onClick={() => handleNavigate("/coming-soon")}
            >
              <i className="bi bi-star-fill"></i>
              <span>Upgrade to Plus</span>
            </button>
          </div>

          {/* User Profile Section */}
          <div className="second bottom-first">
            <div className="upgrade">
              <div className="g">H</div>
              <p>Haneen Alhajali</p>
            </div>
            <i className="bi bi-three-dots"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;