import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-content animate-fade-in">
        <h2 className="greeting">Hello, I'm Dada Obafemi</h2>
        <h1 className="hero-title">
          I build mobile products with <br />
          <span className="text-gradient">Real User Flows</span>
        </h1>
        <p className="hero-desc delay-100 animate-fade-in">
          Not just another app developer. I specialize in designing and
          engineering mid-to-large scale mobile products with complete backend
          integration, smooth UX, and robust architectures using React Native
          and Expo.
        </p>
        <div className="hero-actions delay-200 animate-fade-in">
          <a href="#contact" className="btn btn-primary">
            Get In Touch
          </a>
          <a href="#projects" className="btn btn-outline">
            View App Portfolio
          </a>
        </div>
      </div>

      {/* Decorative background blur */}
      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>
    </section>
  );
};

export default Hero;
