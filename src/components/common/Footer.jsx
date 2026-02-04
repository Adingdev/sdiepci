import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <img src="/images/logo.png" alt="SDIEP Logo" />
          </div>
          <p className="footer-description">
            Société de Développement Immobilier et d'Études de Projets - 
            Expert en plomberie, carrelage, électricité, vitrerie, peinture et menuiserie pour tous vos travaux.
          </p>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Liens Rapides</h3>
          <ul className="footer-links">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">À propos</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Réalisations</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Nos Services</h3>
          <ul className="footer-links">
            <li><Link to="/services/plomberie">Plomberie</Link></li>
            <li><Link to="/services/carrelage">Carrelage</Link></li>
            <li><Link to="/services/electricite">Électricité</Link></li>
            <li><Link to="/services/vitrerie">Vitrerie</Link></li>
            <li><Link to="/services/peinture">Peinture</Link></li>
            <li><Link to="/services/menuiserie">Menuiserie</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contacts</h3>
          <div className="footer-contact">
            <p>
              <FaMapMarkerAlt className="footer-icon" />
              <span>Abidjan, Côte d'Ivoire</span>
            </p>
            <p>
              <FaPhone className="footer-icon" />
              <span>+225 05 74 37 82 01</span>
            </p>
            <p>
              <FaEnvelope className="footer-icon" />
              <span>sdiepcotedivoire@gmail.com</span>
            </p>
          </div>
          <div className="footer-hours">
            <p><strong>Horaires:</strong></p>
            <p>Lundi - Samedi: 08H - 18H30</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SDIEP. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
