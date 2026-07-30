import React from "react";
import { motion } from "framer-motion";

import {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaDocker,
} from "react-icons/fa";

import {
  SiDjango,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiFlask,
  SiSqlite,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

import "./Skills.css";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { icon: <FaPython />, name: "Python" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <FaDatabase />, name: "SQL" },
    ],
  },

  {
    title: "Web Technologies",
    skills: [
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3Alt />, name: "CSS3" },
      { icon: <FaBootstrap />, name: "Bootstrap" },
      { icon: <FaCss3Alt />, name: "Responsive Design" },
    ],
  },

  {
    title: "Backend Development",
    skills: [
      { icon: <SiDjango />, name: "Django" },
      { icon: <SiDjango />, name: "Django REST Framework" },
      { icon: <SiFlask />, name: "Flask" },
      { icon: <SiPostman />, name: "REST APIs" },
      { icon: <SiPostman />, name: "JWT Authentication" },
      { icon: <FaDatabase />, name: "Redis (Basic)" },
    ],
  },

  {
    title: "Frontend Development",
    skills: [
      { icon: <FaReact />, name: "React.js" },
      { icon: <FaReact />, name: "Axios" },
      { icon: <FaReact />, name: "React Router" },
    ],
  },

  {
    title: "Database",
    skills: [
      { icon: <SiSqlite />, name: "SQLite" },
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
    ],
  },

  {
    title: "Tools & Version Control",
    skills: [
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <FaGithub />, name: "GitHub" },
      { icon: <VscVscode />, name: "VS Code" },
      { icon: <SiPostman />, name: "Postman" },
      { icon: <FaDocker />, name: "Docker (Basic)" },
    ],
  },

  {
    title: "AI & Automation",
    skills: [
      { icon: <FaPython />, name: "AI Resume Analyzer" },
      { icon: <FaPython />, name: "ATS Resume Parsing" },
      { icon: <FaPython />, name: "PDF Processing" },
      { icon: <FaPython />, name: "Automation" },
      { icon: <SiPostman />, name: "API Integration" },
      { icon: <FaDatabase />, name: "CRUD Development" },
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <motion.div
          className="skills-title"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span>TECH STACK</span>

          <h2>Technologies I Work With</h2>

          <p>
            A collection of technologies, frameworks, databases and tools I
            use to build modern, scalable and high-performance full-stack web
            applications.
          </p>
        </motion.div>

        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="skill-category"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            <h3>
              <span className="category-dot"></span>
              {category.title}
            </h3>

            <div className="skills-grid">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  className="skill-card"
                  whileHover={{
                    scale: 1.05,
                    y: -4,
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="skill-icon">{skill.icon}</div>

                  <span className="skill-name">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;