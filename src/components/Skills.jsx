import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
     "React Native", "Expo", "Node.js", "Express.js", "MongoDB", "Postgres",
    "TypeScript", "JavaScript (ES6+)", "Git & GitHub"
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <h2 className="section-title">
          My <span className="text-gradient">Tech Stack</span>
        </h2>
        <div className="skills-grid delay-200 animate-fade-in">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item glass">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
