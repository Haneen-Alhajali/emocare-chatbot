import React from 'react';
import '../../assets/styles/Home/pricing.css';

const Pricing = () => {
  return (
    <>
      {/* Pricing Section */}
      <section id="pricing" className="pricing section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Pricing</h2>
          <p>
            Affordable Plans for Everyone
            <br />
          </p>
        </div>
        {/* End Section Title */}
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-3 col-md-6"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="pricing-tem">
                <h3 style={{ color: "#20c997" }}>Free Plan</h3>
                <div className="price">
                  <sup>$</sup>0<span> / mo</span>
                </div>
                <div className="icon">
                  <i className="bi bi-box" style={{ color: "#20c997" }} />
                </div>
                <ul>
                  <li>Basic AI Chatbot Access</li>
                  <li>Mood Tracking</li>
                  <li>Daily Mental Health Tips</li>
                  <li className="na">Voice-Based Support</li>
                  <li className="na">Priority Customer Support</li>
                </ul>
                <a href="#" className="btn-buy">
                  Get Started
                </a>
              </div>
            </div>
            {/* End Pricing Item */}
            <div
              className="col-lg-3 col-md-6"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <div className="pricing-tem">
                <span className="featured">Featured</span>
                <h3 style={{ color: "#0dcaf0" }}>Starter Plan</h3>
                <div className="price">
                  <sup>$</sup>19<span> / mo</span>
                </div>
                <div className="icon">
                  <i className="bi bi-send" style={{ color: "#0dcaf0" }} />
                </div>
                <ul>
                  <li>All Free Plan Features</li>
                  <li>Voice-Based Support</li>
                  <li>Personalized Resources</li>
                  <li>Weekly Progress Reports</li>
                  <li className="na">Direct Doctor Consultation</li>
                </ul>
                <a href="#" className="btn-buy">
                  Get Started
                </a>
              </div>
            </div>
            {/* End Pricing Item */}
            <div
              className="col-lg-3 col-md-6"
              data-aos="zoom-in"
              data-aos-delay={300}
            >
              <div className="pricing-tem">
                <h3 style={{ color: "#dd9b1f" }}>Premium Plan</h3>
                <div className="price">
                  <sup>$</sup>29<span> / mo</span>
                </div>
                <div className="icon">
                  <i className="bi bi-airplane" style={{ color: "#dd9b1f" }} />
                </div>
                <ul>
                  <li>All Starter Plan Features</li>
                  <li>Direct Doctor Consultation</li>
                  <li>Advanced Mood Analytics</li>
                  <li>24/7 Priority Support</li>
                  <li>Exclusive Mental Health Webinars</li>
                </ul>
                <a href="#" className="btn-buy">
                  Get Started
                </a>
              </div>
            </div>
            {/* End Pricing Item */}
            <div
              className="col-lg-3 col-md-6"
              data-aos="zoom-in"
              data-aos-delay={400}
            >
              <div className="pricing-tem">
                <h3 style={{ color: "#0d6efd" }}>Ultimate Plan</h3>
                <div className="price">
                  <sup>$</sup>49<span> / mo</span>
                </div>
                <div className="icon">
                  <i className="bi bi-rocket" style={{ color: "#0d6efd" }} />
                </div>
                <ul>
                  <li>All Premium Plan Features</li>
                  <li>Unlimited Doctor Consultations</li>
                  <li>Customized Therapy Plans</li>
                  <li>Family Plan Access</li>
                  <li>Dedicated Mental Health Coach</li>
                </ul>
                <a href="#" className="btn-buy">
                  Get Started
                </a>
              </div>
            </div>
            {/* End Pricing Item */}
          </div>
          {/* End pricing row */}
        </div>
      </section>
      {/* /Pricing Section */}
    </>
  );
};

export default Pricing;