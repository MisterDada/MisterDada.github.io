import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="contact-wrapper glass text-center delay-300 animate-fade-in">
          <h2 className="section-title" style={{marginBottom: '1rem'}}>
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="contact-desc">
            Currently open to new opportunities. Let's build something amazing together!
          </p>
          <a href="mailto:dadaobafemi26@gmail.com" className="btn btn-primary contact-btn">
            Send me an Email
          </a>
          
          <div className="social-links">
            <a href="https://github.com/MisterDada" className="social-link">GitHub</a>
            <a href="https://www.linkedin.com/in/dada-obafemi-0b8a7b262" className="social-link">LinkedIn</a>
            {/* <a href="#" className="social-link">Twitter</a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
