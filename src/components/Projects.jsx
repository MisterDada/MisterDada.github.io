import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Glowinside",
      desc: "Glowinside is a mental halth awareness app. It is a cross platform app that helps people to improve their mental health.",
      detailedDesc: "Glowinside goes beyond simple tracking to provide a comprehensive mental health toolkit. Users can monitor their daily moods, access guided meditation sessions, and read curated articles on wellbeing. The app utilizes engaging Reanimated animations to create a soothing user experience, while the robust Node.js and MongoDB backend ensures secure and reliable data storage. It is designed to be accessible and helpful for anyone looking to improve their mental hygiene.",
      image: "/glowinside1.jpeg",
      additionalImages: ["", "", ""],
      tags: ["React Native", "Expo", "Reanimated", "NodeJs", "Express", "MongoDB", "DEMO"],
      github: "https://github.com/MisterDada/GlowInside"
    },
    {
      title: "Kolo+ mobile app",
      desc: "Kolo+ is a savings app. It includes a feature called friend accountability that allows users let friends view their savings goals and send notifications to hold them accountable ",
      detailedDesc: "Kolo+ revolutionizes personal savings by integrating social accountability. Users can set custom savings goals and invite friends to act as accountability partners. These partners can track progress and send motivational nudges or reminders right within the app. Built completely on Firebase, Kolo+ offers real-time updates and seamless user authentication. Its beautiful, responsive interface is powered by React Native and Expo.",
      image: "Splash Screen.jpeg",
      additionalImages: ["/Onboarding-1.jpeg", "/Onboarding-2.jpeg", "/Onboarding-3.jpeg"],
      tags: ["React Native", "Expo", "Reanimated", "firebase", "DEMO"],
      github: "https://github.com/MisterDada/KOLO"
    },
    {
      title: "Local Market Backend",
      desc: "Local-Market-API is a scalable backend for a small online marketplace built with Node.js, Express, and MongoDB. It supports user authentication, product management, semantic product search with AI-generated keywords, image uploads to Cloudinary, and a fully functional shopping cart system.",
      detailedDesc: "The Local Market Backend is a robust API designed for modern online marketplaces. It seamlessly integrates Cloudinary for efficient image management and leverages Gemini AI to auto-generate descriptive product keywords for enhanced searchability. The system covers everything from secure user authentication via JWT, integration and unit tests to complex cart and order management, making it a reliable foundation for frontend applications.",
      image: "",
      additionalImages: ["", "", ""],
      tags: ["NodeJs", "Express", "MongoDB", "Cloudinary", "Gemini AI", "LIVE" ],
      github: "https://github.com/MisterDada/Local-Market-API"
    },
    {
      title: "Smart File Processing Pipeline",
      desc: "Problem: Manual file cleaning and validation created inconsistencies and slowed down internal workflows. Solution: Built a backend service using FastAPI and Python that automatically processes uploaded files, applies transformation rules, and stores clean data in a database. Architecture Client uploads file → FastAPI API → Processing engine → Local storage + Database Key Features File upload API Rule-based data cleaning Error handling and validation Automated storage and persistence",
      detailedDesc: "The Local Market Backend is a robust API designed for modern online marketplaces. It seamlessly integrates Cloudinary for efficient image management and leverages Gemini AI to auto-generate descriptive product keywords for enhanced searchability. The system covers everything from secure user authentication via JWT, integration and unit tests to complex cart and order management, making it a reliable foundation for frontend applications.",
      image: "",
      additionalImages: ["", "", ""],
      tags: ["React", "Python", "FastAPI", "LIVE" ],
      github: "https://github.com/MisterDada/Local-Market-API"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <h2 className="section-title">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <div key={idx} className="project-card glass delay-200 animate-fade-in">
              <div className="project-image">
                {/* Fallback pattern if image is missing */}
                <div className="img-placeholder">
                   <img src={proj.image} alt={proj.title} onError={(e) => { e.target.style.display='none'; e.target.parentNode.classList.add('fallback-bg'); }} />
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc">{proj.desc}</p>
                <div className="project-tags">
                  {proj.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                  <button title='Details' onClick={() => setSelectedProject(proj)} className="btn btn-primary" style={{ flex: 1, padding: '0.8rem 1.5rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                    Details
                  </button>
                  <button title='Github' onClick={() => window.open(proj.github, '_blank')} className="btn btn-outline" style={{ flex: 1 }}>
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="project-modal-close" onClick={() => setSelectedProject(null)}>
              &times;
            </button>
            <h3 className="project-modal-title">{selectedProject.title}</h3>
            <div className="project-modal-tags">
              {selectedProject.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <p className="project-modal-desc">{selectedProject.detailedDesc}</p>
            
            <div className="project-modal-gallery">
              {selectedProject.additionalImages.map((src, idx) => (
                <div key={idx} className="project-modal-image-placeholder">
                  {src ? <img src={src} alt={`${selectedProject.title} view ${idx + 1}`} /> : <div className="empty-image" />}
                </div>
              ))}
            </div>
            <div className="project-modal-actions">
              <button onClick={() => window.open(selectedProject.github, '_blank')} className="btn btn-outline" style={{width: '100%'}}>
                   View on GitHub
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
