import React from 'react';
import './SocialIcons.css';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'; // Importamos el ícono de WhatsApp

function SocialIcons() {
  return (
    <div className="social-icons-container">
      <div className="social-icons">
        <a href="https://www.instagram.com/tus_uadec" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon instagram" />
        </a>
        <a href="https://www.facebook.com/TUSUAdeC" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon facebook" />
        </a>
      </div>

      {/* Botón de contacto con WhatsApp */}
      <a href="https://wa.me/528611023793" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
        <FaWhatsapp className="whatsapp-icon" /> Contáctanos
      </a>
    </div>
  );
}

export default SocialIcons;
