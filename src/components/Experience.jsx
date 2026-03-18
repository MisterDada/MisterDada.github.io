import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Software Developer",
      company: "First Central Credit Bureau",
      duration: "Dec 2025 - Present",
      location: "On-Site",
      description: "Developed a file processing pipeline, reducing human error and bad data quality by 20%. ",
      skills: ["React Native", "React", "Expo", "Python", "Django", "Typescript"]
    },
    {
      id: 2,
      role: "Mobile App Developer",
      company: "Freelance",
      duration: "Jan 2025 - Prsent",
      location: "Remote",
      description: "Built cross-platform mobile applications using React Native and Expo. Developed custom animations and user experiences resulting in high user retention rates. Integrated with Firebase for real-time data sync.",
      skills: ["React Native", "Expo", "Firebase", "Reanimated"]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 className="section-title">
          Professional <span className="text-gradient">Experience</span>
        </h2>
        
        <div className="experience-list">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-item glass delay-200 animate-fade-in">
              <div className="exp-icon">
                <div className="icon-inner">💼</div>
              </div>
              <div className="exp-content">
                <h3 className="exp-role">{exp.role}</h3>
                <div className="exp-company">{exp.company}</div>
                <div className="exp-meta">
                  <span className="exp-duration">{exp.duration}</span>
                  <span className="exp-separator">•</span>
                  <span className="exp-location">{exp.location}</span>
                </div>
                <p className="exp-description">{exp.description}</p>
                <div className="exp-skills">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="skill-pill">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
