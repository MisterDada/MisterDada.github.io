import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="contact-wrapper glass text-center delay-300 animate-fade-in">
          <h2 className="section-title" style={{marginBottom: '1rem'}}>
            Ready to Build <span className="text-gradient">Something Great?</span>
          </h2>
          <p className="contact-desc">
            I'm currently open to new opportunities to engineer mobile products. Whether you have a project in mind or just want to chat about architecture, let's connect.
          </p>
          <a href="mailto:dadaobafemi26@gmail.com" className="btn btn-primary contact-btn">
            Get In Touch
          </a>
          
          <div className="social-links">
            <a href="https://github.com/MisterDada" className="social-link" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/dada-obafemi-0b8a7b262" className="social-link" target="_blank" rel="noreferrer">LinkedIn</a>
            {/* <a href="/Dada_Obafemi_Resume.pdf" className="social-link" target="_blank" rel="noreferrer">Resume</a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
