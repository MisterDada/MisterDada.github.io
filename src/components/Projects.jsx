import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: "glowinside",
      title: "Glowinside",
      tagline: "A comprehensive mental health toolkit for daily wellbeing.",
      demoVideo: "public/appVideos/glowinsidevideo.mp4", // Placeholder for demo video or GIF
      links: {
        tryIt: "#", // Try It link (APK/TestFlight/Expo)
        github: "https://github.com/MisterDada/GlowInside"
      },
      story: {
        problem: "Glowinside is a mental health awareness mobile application inspired by Headspace. The app focuses on promoting mindfulness, emotional awareness, and daily mental wellness through a calm, user-friendly mobile experience. The project demonstrates modern React Native development practices, smooth animations, and platform-aware UI design.",
        solution: "Engineered a cross-platform mobile app featuring daily mood monitoring, guided meditation sessions, and curated wellbeing articles.",
        challenges: "Implementing complex, soothing animations with Reanimated while maintaining 60fps performance across low-end Android and iOS devices.",
        impact: "Delivered a performant, accessible tool for mental health tracking backed by a secure Node.js/MongoDB infrastructure."
      },
      tech: ["React Native", "Expo", "Reanimated", "Node.js", "Express", "MongoDB"],
      images: ["/glowinside1.jpeg"]
    },
    {
      id: "kolo",
      title: "Kolo+",
      tagline: "Social accountability savings app to help groups reach financial goals.",
      demoVideo: "", // Placeholder for demo video or GIF
      links: {
        tryIt: "#", // Try It link
        github: "https://github.com/MisterDada/KOLO"
      },
      story: {
        problem: "Saving money alone is hard. Users drop off without external motivation and accountability.",
        solution: "Built a social savings platform where users set financial goals and invite friends to act as accountability partners who can monitor progress and send nudges.",
        challenges: "Architecting a seamless real-time notification loop and robust data synchronization using Firebase across different mobile clients.",
        impact: "Created an engaging, responsive interface that turns a solitary financial chore into a interactive social habit."
      },
      tech: ["React Native", "Expo", "Firebase", "Reanimated"],
      images: ["Splash Screen.jpeg", "/Onboarding-1.jpeg", "/Onboarding-2.jpeg", "/Onboarding-3.jpeg"]
    },
    {
      id: "localmarket",
      title: "Local Market Backend",
      tagline: "Scalable backend API for a modern online marketplace with AI-driven search.",
      demoVideo: "", // Usually backends don't have visual demos, but maybe a GIF of API response or frontend integration
      links: {
        tryIt: "#", // Live API documentation or deployed URL
        github: "https://github.com/MisterDada/Local-Market-API"
      },
      story: {
        problem: "Small marketplaces struggle with poor searchability and managing complex image uploads gracefully.",
        solution: "Developed a robust Node.js API featuring semantic product search using AI-generated keywords and seamless Cloudinary integration for image management.",
        challenges: "Designing a robust JWT authentication flow and complex relational constraints for cart and order management across a non-relational database.",
        impact: "Provided a highly reliable, test-driven backend foundation capable of supporting scalable frontend implementations."
      },
      tech: ["Node.js", "Express", "MongoDB", "Cloudinary", "Gemini AI", "Jest"],
      images: []
    },
    {
      id: "smartfile",
      title: "Smart File Processing Pipeline",
      tagline: "Automated ETL pipeline to clean, validate, and process internal workflow data.",
      demoVideo: "public/appVideos/filecleaner.mp4", // Placeholder
      links: {
        tryIt: "#", // Live link if available
        github: "#" // Link if available
      },
      story: {
        problem: "Manual file cleaning and validation created severe inconsistencies and slowed down critical internal workflows.",
        solution: "Built a backend service using FastAPI that automatically ingests uploaded files, applies strict transformation and data cleaning rules, and safely stores clean data.",
        challenges: "Handling potentially massive file uploads and creating a dynamic rule engine capable of validating deeply nested, unstructured data formats.",
        impact: "Reduced data entry errors by 20% and significantly diminished the human-hours required for data preparation."
      },
      tech: ["Python", "FastAPI", "Pandas", "React"],
      images: []
    }
  ];

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2 className="section-title">
            Featured <span className="text-gradient">Apps</span>
          </h2>
          <p className="section-subtitle">Deep dives into architecture, user flows, and product decisions.</p>
        </div>

        <div className="projects-feed">
          {projects.map((proj, idx) => (
            <article key={proj.id} className={`project-case-study glass delay-${idx * 100} animate-fade-in`}>
              
              <div className="project-header">
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-tagline">{proj.tagline}</p>
                <div className="project-actions">
                  <a href={proj.links.tryIt} className="btn btn-primary btn-sm">Try It (Live / APK) &rarr;</a>
                  <a href={proj.links.github} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">View Source</a>
                </div>
              </div>

              <div className="project-demo-area">
                {proj.demoVideo ? (
                  <div className="demo-wrapper">
                    <video 
                      src={proj.demoVideo}
                      loop 
                      muted 
                      autoPlay 
                      playsInline 
                      preload='none' 
                      poster='' 
                      alt={`${proj.title} demo recording`} 
                      className="demo-media" > </video>
                  </div>
                ) : (
                  <div className="demo-placeholder">
                    <div className="placeholder-content">
                      <span className="icon">🎬</span>
                      <p>Demo Video</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="project-details grid-2-col">
                <div className="story-section">
                  <div className="story-block">
                    <h4>About</h4>
                    <p>{proj.story.problem}</p>
                  </div>
                  <div className="story-block">
                    <h4>Solution</h4>
                    <p>{proj.story.solution}</p>
                  </div>
                  <div className="story-block">
                    <h4>Challenges</h4>
                    <p>{proj.story.challenges}</p>
                  </div>
                  <div className="story-block impact-block">
                    <h4>Impact</h4>
                    <p>{proj.story.impact}</p>
                  </div>
                </div>

                <div className="tech-visual-section">
                  <div className="tech-stack-container">
                    <h4>Engineering Depth</h4>
                    <div className="tech-tags">
                      {proj.tech.map(t => (
                        <span key={t} className="tech-tag">{t}</span>
                      ))}
                    </div>
                  </div>

                  {proj.images.length > 0 && (
                    <div className="supporting-screens">
                      <h4>Supporting Screens</h4>
                      <div className="screens-scroll">
                        {proj.images.map((img, i) => (
                          <div key={i} className="screen-card">
                             <img src={img} alt={`Screen ${i+1}`} loading="lazy" onError={(e) => { e.target.style.display='none'; e.target.parentNode.classList.add('fallback-bg'); }}/>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
