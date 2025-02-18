import React from 'react';
import '../../assets/styles/Home/features.css';

const Features = () => {
  return (
    <>
      {/* Features Section */}
      <section id="features" className="features section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Features</h2>
          <p>
            Our Advanced Features
            <br />
          </p>
        </div>
        {/* End Section Title */}
        <div className="container">
          <div className="row gy-5">
            <div className="col-xl-6" data-aos="zoom-out" data-aos-delay={100}>
              <img src="/assets/img/features.png" className="img-fluid" alt="Features" />
            </div>
            <div className="col-xl-6 d-flex">
              <div className="row align-self-center gy-4">
                <div className="col-md-6" data-aos="fade-up" data-aos-delay={200}>
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check" />
                    <h3>AI-Powered Chatbot</h3>
                  </div>
                </div>
                {/* End Feature Item */}
                <div className="col-md-6" data-aos="fade-up" data-aos-delay={300}>
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check" />
                    <h3>Voice-Based Support</h3>
                  </div>
                </div>
                {/* End Feature Item */}
                <div className="col-md-6" data-aos="fade-up" data-aos-delay={400}>
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check" />
                    <h3>Mood Tracking</h3>
                  </div>
                </div>
                {/* End Feature Item */}
                <div className="col-md-6" data-aos="fade-up" data-aos-delay={500}>
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check" />
                    <h3>Personalized Resources</h3>
                  </div>
                </div>
                {/* End Feature Item */}
                <div className="col-md-6" data-aos="fade-up" data-aos-delay={600}>
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check" />
                    <h3>24/7 Availability</h3>
                  </div>
                </div>
                {/* End Feature Item */}
                <div className="col-md-6" data-aos="fade-up" data-aos-delay={700}>
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check" />
                    <h3>Secure & Confidential</h3>
                  </div>
                </div>
                {/* End Feature Item */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Features Section */}
    </>
  );
};

export default Features;