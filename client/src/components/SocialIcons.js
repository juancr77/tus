import React from 'react';
import './SocialIcons.css';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

function SocialIcons() {
  return (
    <div className="social-icons">
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="icon instagram" />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="icon facebook" />
      </a>
    </div>
  );
}

export default SocialIcons;
