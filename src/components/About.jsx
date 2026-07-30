import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaGraduationCap,
} from "react-icons/fa";
import "./About.css";

const About = () => {
  const cards = [
    {
      icon: <FaLaptopCode />,
      title: "Frontend",
      desc: "Building responsive and modern interfaces using React, JavaScript, HTML5 and CSS3.",
    },
    {
      icon: <FaServer />,
      title: "Backend",
      desc: "Developing secure REST APIs with Python, Django, Django REST Framework and SQL.",
    },
    {
      icon: <FaCode />,
      title: "Full Stack",
      desc: "Creating complete web applications from database design to deployment.",
    },
    {
      icon: <FaGraduationCap />,
      title: "Learning",
      desc: "Continuously improving my skills in cloud technologies, AI and scalable architectures.",
    },
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">ABOUT ME</span>

          <h2>
            Passionate <span>Python Full Stack Developer</span>
          </h2>

          <p>
            I'm Anuranj Krishna, a Python Full Stack Developer passionate about
            creating modern, scalable and user-friendly web applications.
          </p>

          <p>
            My primary stack includes Python, Django, Django REST Framework,
            React, JavaScript, HTML, CSS, Bootstrap and SQL. I enjoy designing
            clean APIs, responsive interfaces and efficient backend systems.
          </p>

          <p>
            My goal is to build high-quality software that delivers excellent
            performance while providing a premium user experience.
          </p>

          <div className="about-stats">
            <div>
              <h3>10+</h3>
              <span>Projects</span>
            </div>

            <div>
              <h3>100%</h3>
              <span>Dedication</span>
            </div>

            <div>
              <h3>24/7</h3>
              <span>Learning</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {cards.map((card, index) => (
            <motion.div
              className="about-card"
              key={index}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
            >
              <div className="about-icon">{card.icon}</div>

              <h3>{card.title}</h3>

              <p>{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;