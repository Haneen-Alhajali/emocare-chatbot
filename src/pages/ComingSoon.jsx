import React from "react";
import "../assets/styles/ComingSoon.css";

const ComingSoon = () => {
  return (
    <div className="coming-soon">
      <main className="comming-content">
        <div className="container">
          <div className="row">
            {/* Left Section */}
            <div className="col-md-6 section-left">
              <h1 className="comming-page-title">🚀 Coming Soon :)</h1>
              <p className="description">
                We are working hard to bring you something amazing. <br />
                <span className="highlight">Stay tuned!</span>
              </p>
              <div className="countdown">⏳ Launching Soon...</div>
            </div>

            {/* Right Section */}
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <img
                src="/assets/img/coming-soon.png"
                alt="Coming Soon"
                className="coming-soon-img"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center coming-soon-footer">
        <nav className="footer-social-links">
          <a href="#!" className="social-link">
            <i className="bi bi-facebook" />
          </a>
          <a href="#!" className="social-link">
            <i className="bi bi-twitter-x" />
          </a>
          <a href="#!" className="social-link">
            <i className="bi bi-instagram" />
          </a>
        </nav>
        <p className="footer-text mb-0">
          © <span>Copyright</span>{" "}
          <strong className="px-1 sitename">EmoCare</strong>{" "}
          <span>All Rights Reserved</span>
        </p>
      </footer>
    </div>
  );
};

export default ComingSoon;
