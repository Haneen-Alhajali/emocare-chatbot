import React from 'react';
import '../../assets/styles/Home/values.css';

const Values = () => {
  return (
    <>
      {/* Values Section */}
      <section id="values" className="values section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Our Values</h2>
          <p>
            What We Stand For
            <br />
          </p>
        </div>
        {/* End Section Title */}
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
              <div className="card">
                <img src="assets/img/values-1.png" className="img-fluid" alt="Empathy" />
                <h3>Empathy</h3>
                <p>
                  We prioritize understanding and compassion in every interaction, ensuring users feel heard and supported.
                </p>
              </div>
            </div>
            {/* End Card Item */}
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={200}>
              <div className="card">
                <img src="assets/img/values-2.png" className="img-fluid" alt="Innovation" />
                <h3>Innovation</h3>
                <p>
                  We leverage cutting-edge technology to provide effective and accessible mental health solutions.
                </p>
              </div>
            </div>
            {/* End Card Item */}
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={300}>
              <div className="card">
                <img src="assets/img/values-3.png" className="img-fluid" alt="Integrity" />
                <h3>Integrity</h3>
                <p>
                  We are committed to transparency, honesty, and ethical practices in everything we do.
                </p>
              </div>
            </div>
            {/* End Card Item */}
          </div>
        </div>
      </section>
      {/* /Values Section */}
    </>
  );
};

export default Values;