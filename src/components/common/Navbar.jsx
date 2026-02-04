import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaUserTie } from 'react-icons/fa';
import CandidatureModal from './CandidatureModal';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [candidatureOpen, setCandidatureOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <img src="/images/logo.png" alt="SDIEP Logo" />
          </Link>

          <div className="menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>

          <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={closeMenu}>
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={closeMenu}>
                Qui sommes-nous ?
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link to="/services" className="nav-link" onClick={closeMenu}>
                Nos Services
              </Link>
              <ul className="dropdown-menu">
                <li><Link to="/services/plomberie" onClick={closeMenu}>Plomberie</Link></li>
                <li><Link to="/services/carrelage" onClick={closeMenu}>Carrelage</Link></li>
                <li><Link to="/services/electricite" onClick={closeMenu}>Électricité</Link></li>
                <li><Link to="/services/vitrerie" onClick={closeMenu}>Vitrerie</Link></li>
                <li><Link to="/services/peinture" onClick={closeMenu}>Peinture</Link></li>
                <li><Link to="/services/menuiserie" onClick={closeMenu}>Menuiserie</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="nav-link" onClick={closeMenu}>
                Nos Réalisations
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link" onClick={closeMenu}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/boutique" className="nav-link" onClick={closeMenu}>
                Boutique
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/rejoindre-equipe" className="nav-link" onClick={closeMenu}>
                Professionnels
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link nav-link-contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>
            <li className="nav-item nav-item-btn">
              <button 
                className="btn-candidature-nav"
                onClick={() => {
                  setCandidatureOpen(true);
                  closeMenu();
                }}
              >
                <FaUserTie /> Postuler
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <CandidatureModal 
        isOpen={candidatureOpen} 
        onClose={() => setCandidatureOpen(false)} 
      />
    </>
  );
};

export default Navbar;
