import React from "react";
import "./ProjectsSection.css";
import { motion } from "framer-motion";
const projectData = [
  
    {
    title: "Web3 Project",
    description: `AI-powered Web3 analytics chatbot with wallet integration and fund transfers.

- Interactive dashboard with predictive AI charts.
- Secure wallet connection and real-time transaction insights.
- Enables smart fund transfers via chatbot interface.`,
    techStack: ["MERN", "Solidity", "Web3"],
    image: "https://res.cloudinary.com/daijhwmiz/image/upload/v1750776238/165_1x_shots_so_scj8xp.png",
    github: "https://github.com/ItzVirAj",
    live: "https://github.com/ItzVirAj",
  },
  {
    title: "TuneTrails",
    description: `A full-stack Spotify Clone built with the MERN stack.

- Secure user and admin authentication with account creation.
- Stream and manage songs with a responsive, modern UI.
- Role-based access control for managing content and users.`,
    techStack: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
    image:
      "https://res.cloudinary.com/daijhwmiz/image/upload/v1750775748/745_1x_shots_so_c0hgqw.png",
    github: "https://github.com/ItzVirAj",
    live: "https://github.com/ItzVirAj",
  },
  {
    title: "Face Detection Attendance System",
    description: `A Face Detection-based Attendance System using Python and OpenCV.

- Real-time face recognition for marking attendance automatically.
- Integrated with a database for secure student/faculty record management.
- Accurate detection even under varied lighting and angles.`,
    techStack: ["Python", "OpenCV", "Tkinter"],
    image:
      "https://res.cloudinary.com/daijhwmiz/image/upload/v1750775856/711_1x_shots_so_apbi26.png",
    github: "https://github.com/ItzVirAj",
    live: "https://github.com/ItzVirAj",
  },
  {
    title: "UAV Object Detection & Thermal Surveillance System",
    description: `A Thermal Surveillance System using Python and OpenCV.

- Captures and processes thermal imagery for real-time monitoring.
- Detects temperature anomalies and motion to flag unusual activity.
- Ideal for security zones, industrial environments, and health monitoring.`,
    techStack: ["Python", "OpenCV", "WebGUI"],
    image:
      "https://res.cloudinary.com/daijhwmiz/image/upload/v1750775747/555_1x_shots_so_roieam.png",
    github: "https://github.com/ItzVirAj",
    live: "https://github.com/ItzVirAj",
  },

];

const ProjectsSection = () => {
  return (
    <section className="carousel-projects-section" id="projects">
      <div className="cslhead">
        <motion.h2
  className="projects-heading"
  initial={{ x: -100, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  viewport={{ once: false, amount: 0.6 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  PROJECTS
</motion.h2>
      </div>
      <div className="carousel-container">
        {projectData.map((_, i) => (
          <input
            key={`radio-${i}`}
            type="radio"
            name="slider"
            id={`item-${i + 1}`}
            defaultChecked={i === 0}
          />
        ))}

        <motion.div
  className="carousel-cards"
  initial={{ x: 100, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  viewport={{ once: false, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>

          {projectData.map((project, i) => (
            <label
              className="carousel-card glass-card"
              htmlFor={`item-${i + 1}`}
              id={`project-${i + 1}`}
              key={`card-${i}`}
            >
              <img src={project.image} alt={project.title} />
              <div className="carousel-info">
                <h3 className="carousel-title">{project.title}</h3>
                <p className="carousel-description">{project.description}</p>
                <div className="carousel-tech-stack">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="carousel-chip">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="carousel-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live Site
                  </a>
                </div>
              </div>
            </label>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
