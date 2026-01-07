import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter } from 'react-icons/fa6'; // Updated for better compatibility
import { SiGooglenews } from 'react-icons/si'; // Fixed capitalization
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sections = [
    { title: "Bangladesh", link: "#" },
    { title: "International", link: "#" },
    { title: "Sports", link: "#" },
    { title: "Opinion", link: "#" },
    { title: "Business", link: "#" },
    { title: "Youth", link: "#" },
    { title: "Entertainment", link: "#" },
    { title: "Lifestyle", link: "#" },
    { title: "Environment", link: "#" },
    { title: "Science & Technology", link: "#" },
    { title: "Corporate", link: "#" },
    { title: "Photo", link: "#" },
    { title: "Video", link: "#" },
    { title: "e-Paper", link: "#" },
    { title: "Search", link: "#" },
    { title: "বাংলা সংস্করণ", link: "#" },
  ];

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Logo Section */}
        <div className="footer-logo">
          <span className="logo-text">TRS Daily Bangla Barta</span>
        </div>

        {/* Links Grid */}
        <div className="footer-grid">
          {sections.map((item, index) => (
            <a key={index} href={item.link} className="footer-link">
              {item.title}
            </a>
          ))}
        </div>

        <div className="footer-divider"></div>

        {/* Social and Apps Section */}
        <div className="footer-bottom-flex">
          <div className="social-section">
            <p>Follow us</p>
            <div className="social-icons">
              <a href="#" className="icon-circle fb" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" className="icon-circle x" aria-label="X (Twitter)"><FaXTwitter /></a>
              <a href="#" className="icon-circle insta" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" className="icon-circle yt" aria-label="YouTube"><FaYoutube /></a>
              <a href="#" className="icon-circle news" aria-label="Google News"><SiGooglenews /></a>
            </div>
          </div>

          <div className="apps-section">
            <p>Download mobile apps</p>
            <div className="app-buttons">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" />
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        {/* Bottom Credits */}
        <div className="footer-credits">
          <div className="legal-links">
            <a href="#">Trs Daily Bangla Barta</a> • <a href="#">Advertise</a> • <a href="#">Terms of Use</a> • <a href="#">Contact Us</a>
          </div>
          <p className="copyright">
            Copyright © {currentYear} TRS Daily Bangla Barta | Editor & Publisher: TRS 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;