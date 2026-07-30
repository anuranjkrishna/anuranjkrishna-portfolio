import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";
import profile from "../assets/images/profile.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* Left Side */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-greeting">👋 Hello, I'm</p>

          <h1>
            Anuranjkrishna K
            <span>.</span>
          </h1>

          <h2>Full Stack Developer</h2>

          <p className="hero-description">
            Passionate Python Full Stack Developer specializing in Django,
            React, REST APIs and modern web applications. I build responsive,
            scalable and user-friendly applications with clean architecture and
            attractive UI.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View Projects
              <FaArrowRight />
            </a>

            <a
              href="/resume.pdf"
              download
              className="secondary-btn"
            >
              <FaDownload />
              Resume
            </a>
          </div>

          <div className="hero-social">
            <a
              href="https://github.com/anuranjkrishna"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/krishna_k.6/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="image-circle">
            <img src={profile} alt="Profile" />
          </div>

          <div className="glow glow1"></div>
          <div className="glow glow2"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;