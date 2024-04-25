import React, { useState } from "react";
import styles from "./Contact.module.css";
import { FaInstagram, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

export const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
    // For demonstration purposes, let's just set messageSent to true
    setMessageSent(true);
    // Clear form inputs
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    // Hide message after 3 seconds
    setTimeout(() => {
      setMessageSent(false);
    }, 1300);
  };

  return (
    <>
      <section className={styles.container} id="contact">
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <h2>Contact Us</h2>
          <div>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name.."
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email.."
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              id="message"
              name="message"
              rows={10}
              placeholder="Write something.."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <input type="submit" value="Submit" />
          </div>
        </form>

        <div className={styles.divider}></div>

        <div className={styles.socialMedia}>
          <h2>Connect With Us</h2>
          <ul>
            <li>
              <FaInstagram />
              <a
                href="https://www.instagram.com/rohit_.pundir/"
                target="_blank"
              >
                Instagram
              </a>
            </li>
            <li>
              <FaLinkedinIn />
              <a
                href="www.linkedin.com/in/
rohit-pundir-21b551285"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <FaGithub />
              <a
                href="https://github.com/RohitPundir98?tab=repositories"
                target="_blank"
              >
                Github
              </a>
            </li>
            <li>
              <FaTwitter />
              <a href="https://twitter.com/RohitPu57642435" target="_blank">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </section>
      {messageSent && (
        <small className={styles.messageSent}>
          <i className="fas fa-check-circle" style={{ marginRight: "5px" }}></i>
          Message sent ✓
        </small>
      )}
      <footer className={styles.footer}>
        <p className={styles.footerText}>
          All &copy; reserved. Made with <span>&hearts;</span> By Rohit
        </p>
      </footer>
    </>
  );
};
