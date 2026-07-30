import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const contacts = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "anuranjkrishnakadankodan@gmail.com",
      link: "mailto:anuranjkrishnakadankodan@gmail.com",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      value: "+91 XXXXXXXXXX",
      link: "tel:+91XXXXXXXXXX",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "github.com/anuranjkrishna",
      link: "https://github.com/anuranjkrishna",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "linkedin.com/in/yourprofile",
      link: "https://linkedin.com/in/yourprofile",
    },
    {
      icon: <FaInstagram />,
      title: "Instagram",
      value: "@krishna_k.6",
      link: "https://www.instagram.com/krishna_k.6/",
    },
  ];

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>CONTACT</span>

          <h2>Let's Work Together</h2>

          <p>
            I'm always interested in new opportunities,
            freelance work and exciting projects.
            Feel free to reach out anytime.
          </p>
        </motion.div>

        <div className="contact-grid">

          {contacts.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="contact-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
            >
              <div className="contact-icon">
                {item.icon}
              </div>

              <div>
                <h3>{item.title}</h3>
                <p>{item.value}</p>
              </div>
            </motion.a>
          ))}

        </div>

        <motion.div
          className="contact-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href="mailto:anuranjkrishnakadankodan@gmail.com"
            className="email-btn"
          >
            Email Me
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;