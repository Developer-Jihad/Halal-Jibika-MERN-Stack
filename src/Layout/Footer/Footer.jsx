// Footer.js

import React from "react";
import styles from "./footer.module.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <div className={styles.footerBg}>
      <footer className={styles.footer}>
        <div className={styles.column} style={{ border: "none" }}>
          <div className={styles.logo}>
            <img src={Logo} alt="" />
          </div>
          <p>
            “Keep hardworking, take patients and make yourself ready for jobs”.
          </p>
        </div>
        <div className={styles.column}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Connect with Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +1 123-456-7890</p>
          <h3>About Us</h3>
          <p>Company's description goes here.</p>
        </div>
        <div className={styles.column}>
          <h3>Social Media</h3>
          <div className={styles.socialLinks}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
