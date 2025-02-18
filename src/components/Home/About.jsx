import React from 'react';
import '../../assets/styles/Home/about.css';

const About = () => {
  return (
    <>
      {/* About Section */}
      <section id="about" className="about section">
        <div className="container" data-aos="fade-up">
          <div className="row gx-0">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="content">
                <h3>Who We Are</h3>
                <h2>
                  Empowering mental health through innovative AI solutions.
                </h2>
                <p>
                  At EmoCare, we are dedicated to providing accessible and effective mental health support. Our AI-powered chatbot is designed to help you navigate your mental health journey with personalized resources and coping mechanisms.
                </p>
                <div className="text-center text-lg-start">
                  <a
                    href="#"
                    className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>Read More</span>
                    <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 d-flex align-items-center"
              data-aos="zoom-out"
              data-aos-delay={200}
            >
              <img src="/assets/img/about.jpg" className="img-fluid" alt="About EmoCare" />
            </div>
          </div>
        </div>
      </section>
      {/* /About Section */}
    </>
  );
};

export default About;