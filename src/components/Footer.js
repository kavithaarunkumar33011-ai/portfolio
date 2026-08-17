import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import '../Style/Footer.css'; // <-- import css

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-brand">
          <h3 style={{color: '#ffd700', fontFamily: 'Playfair Display, serif', fontSize: '18px'}}>Kavitha Arunkumar</h3>
          <p>Full Stack Developer</p>
        </div>
        
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-socials">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <FaGithub size={16} />
          </a>
          <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={16} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={16} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © {currentYear} All Rights Reserved. Built with ❤️
      </div>
    </footer>
  );
}