import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-content animate-fade-in">
        <h2 className="greeting">Hello, I'm Dada Obafemi</h2>
        <h1 className="hero-title">
          A Mobile App Developer building <br />
          <span className="text-gradient">Digital Experiences</span>
        </h1>
        <p className="hero-desc delay-100 animate-fade-in">
          I specialize in building mobile apps, backend development and transforming ideas into stunning realities with modern technologies like React Native and Expo.
        </p>
        <div className="hero-actions delay-200 animate-fade-in">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-outline">Get In Touch</a>
        </div>
      </div>
      
      {/* Decorative background blur */}
      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>
    </section>
  );
};

export default Hero;
