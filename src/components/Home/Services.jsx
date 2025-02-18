import React from 'react';
import '../../assets/styles/Home/services.css';

const Services = () => {
  return (
    <>
      {/* Services Section */}
      <section id="services" className="services section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>
            Explore Our Mental Health Services
            <br />
          </p>
        </div>
        {/* End Section Title */}
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="service-item item-cyan position-relative">
                <i className="bi bi-activity icon" />
                <h3>AI-Powered Chatbot</h3>
                <p>
                  Our AI chatbot provides instant mental health support, offering coping mechanisms and resources tailored to your needs.
                </p>
                <a href="#" className="read-more stretched-link">
                  <span>Read More</span> <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
            {/* End Service Item */}
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="service-item item-orange position-relative">
                <i className="bi bi-broadcast icon" />
                <h3>Voice-Based Support</h3>
                <p>
                  Access our chatbot through voice commands for a hands-free and convenient experience.
                </p>
                <a href="#" className="read-more stretched-link">
                  <span>Read More</span> <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
            {/* End Service Item */}
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="service-item item-teal position-relative">
                <i className="bi bi-easel icon" />
                <h3>Mood Tracking</h3>
                <p>
                  Track your mood over time and gain insights into your emotional well-being with our advanced analytics.
                </p>
                <a href="#" className="read-more stretched-link">
                  <span>Read More</span> <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
            {/* End Service Item */}
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="service-item item-red position-relative">
                <i className="bi bi-bounding-box-circles icon" />
                <h3>Doctor Consultations</h3>
                <p>
                  Connect with licensed mental health professionals for personalized advice and support.
                </p>
                <a href="#" className="read-more stretched-link">
                  <span>Read More</span> <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
            {/* End Service Item */}
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={500}
            >
              <div className="service-item item-indigo position-relative">
                <i className="bi bi-calendar4-week icon" />
                <h3>Personalized Plans</h3>
                <p>
                  Receive customized mental health plans based on your unique needs and goals.
                </p>
                <a href="#" className="read-more stretched-link">
                  <span>Read More</span> <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
            {/* End Service Item */}
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={600}
            >
              <div className="service-item item-pink position-relative">
                <i className="bi bi-chat-square-text icon" />
                <h3>24/7 Support</h3>
                <p>
                  Access our services anytime, anywhere, with round-the-clock support for your mental health needs.
                </p>
                <a href="#" className="read-more stretched-link">
                  <span>Read More</span> <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
            {/* End Service Item */}
          </div>
        </div>
      </section>
      {/* /Services Section */}
    </>
  );
};

export default Services;