import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'glass' : ''}`}>
      <div className="container nav-content">
        <a href="#home" className="logo text-gradient">Dev Dada</a>
        <div className="nav-links">
          <a href="#projects" className="nav-link">Apps</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#contact" className="btn btn-primary btn-sm">Contact Me</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
