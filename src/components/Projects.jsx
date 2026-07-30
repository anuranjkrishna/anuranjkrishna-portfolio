import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import aiResume from "../assets/ai-resume-analyzer.png";
import employeeTracker from "../assets/employee-tracker.png";
import letsConnect from "../assets/letsconnect.png";

import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "AI Resume Analyzer",
      image: aiResume,
      description:
        "An AI-powered ATS Resume Analyzer built using Python and Flask. It analyzes resumes, extracts skills, calculates ATS scores, and provides suggestions to improve job compatibility.",

      tech: [
        "Python",
        "Flask",
        "HTML",
        "CSS",
        "Bootstrap",
        "AI",
      ],

      github: "https://github.com/anuranjkrishna",
      demo: "#",
    },

    {
      title: "Employee Tracker",
      image: employeeTracker,
      description:
        "A complete Employee Management System with authentication, CRUD operations, dashboard analytics, employee records, and responsive admin interface.",

      tech: [
        "Django",
        "Python",
        "React",
        "REST API",
        "SQLite",
      ],

      github: "https://github.com/anuranjkrishna",
      demo: "#",
    },

    {
      title: "Let's Connect",
      image: letsConnect,
      description:
        "A modern social media platform featuring authentication, posts, likes, comments, profile management, image uploads and responsive UI.",

      tech: [
        "React",
        "Django",
        "DRF",
        "JWT",
        "Bootstrap",
      ],

      github: "https://github.com/anuranjkrishna",
      demo: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>MY WORK</span>

          <h2>Featured Projects</h2>

          <p>
            Here are some of the projects that demonstrate my
            backend, frontend and full stack development skills.
          </p>
        </motion.div>

        <div className="projects-grid">

          {projects.map((project, index) => (

            <motion.div
              className="project-card"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >

              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                />
              </div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">

                  {project.tech.map((item, i) => (
                    <span key={i}>{item}</span>
                  ))}

                </div>

                <div className="project-buttons">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;