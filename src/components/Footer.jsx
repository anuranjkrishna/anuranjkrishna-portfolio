import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-left">
          <h2>
            Anuranj<span>Krishna</span>
          </h2>

          <p>
            Python Full Stack Developer passionate about building
            modern, scalable and responsive web applications with
            clean UI and efficient backend architecture.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>📧 anuranjkrishnakadankodan@gmail.com</p>
          <p>📍 Kerala, India</p>

          <div className="footer-social">

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
        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © {year} Anuranj Krishna. All Rights Reserved.
        </p>

        <button
          onClick={scrollTop}
          className="scroll-top"
        >
          <FaArrowUp />
        </button>

      </div>

    </footer>
  );
};

export default Footer;