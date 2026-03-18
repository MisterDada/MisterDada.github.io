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
      points: [
        "Architected and developed a robust file processing pipeline using Python and FastAPI.",
        "Implemented strict data validation rules, reducing human data entry errors and bad data quality by 20%.",
        "Refactored legacy workflows into automated ETL processes, significantly improving internal operational speed."
      ],
      skills: ["Python", "FastAPI", "React", "TypeScript", "ETL"]
    },
    {
      id: 2,
      role: "Mobile App Developer",
      company: "Freelance",
      duration: "Jan 2025 - Present",
      location: "Remote",
      points: [
        "Built and shipped multiple cross-platform mobile applications serving real user needs using React Native & Expo.",
        "Engineered complex UI workflows and custom animations with Reanimated, leading to higher session lengths.",
        "Integrated Firebase and Node.js backends for scalable real-time data synchronization and secure authentication."
      ],
      skills: ["React Native", "Expo", "Firebase", "Node.js", "Reanimated"]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 className="section-title">
          Engineering <span className="text-gradient">Experience</span>
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
                <ul className="exp-points">
                  {exp.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
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
