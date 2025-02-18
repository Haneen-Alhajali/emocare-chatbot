import React from 'react';
import '../../assets/styles/Home/footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-newsletter"></div>
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="index.html" className="d-flex align-items-center">
              <span className="sitename">EmoCare</span>
            </a>
            <div className="footer-contact pt-3">
              <p>123 Wellness Street</p>
              <p>New York, NY 10001</p>
              <p className="mt-3">
                <strong>Phone:</strong> <span>+1 234 567 890</span>
              </p>
              <p>
                <strong>Email:</strong> <span>support@emocare.com</span>
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <i className="bi bi-chevron-right" /> <a href="#">Home</a>
              </li>
              <li>
                <i className="bi bi-chevron-right" /> <a href="#">About Us</a>
              </li>
              <li>
                <i className="bi bi-chevron-right" /> <a href="#">Services</a>
              </li>
              <li>
                <i className="bi bi-chevron-right" /> <a href="#">The Team</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <i className="bi bi-chevron-right" /> <a href="#">Chatbot</a>
              </li>
              <li>
                <i className="bi bi-chevron-right" /> <a href="#">Voice Chat</a>
              </li>
              <li>
                <i className="bi bi-chevron-right" /> <a href="#">Chat with Doctor</a>
              </li>
              <li>
                <i className="bi bi-chevron-right" /> <a href="#">Mood Tracker</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12">
            <h4>Follow Us</h4>
            <p>
              Stay connected with us for the latest updates and mental health tips.
            </p>
            <div className="social-links d-flex">
              <a href="">
                <i className="bi bi-twitter-x" />
              </a>
              <a href="">
                <i className="bi bi-facebook" />
              </a>
              <a href="">
                <i className="bi bi-instagram" />
              </a>
              <a href="">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span>{" "}
          <strong className="px-1 sitename">EmoCare</strong>{" "}
          <span>All Rights Reserved</span>
        </p>
        <div className="credits">
          Designed by <a href="">Haneen</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;