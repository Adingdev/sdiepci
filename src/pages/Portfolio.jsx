import React, { useState } from 'react';
import { FaMapMarkerAlt, FaCalendar, FaCheck, FaTimes, FaUser, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { portfolioData, categories } from '../data/portfolioData';
import './PageStyles.css';
import './Portfolio.css';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === 'all' 
    ? portfolioData 
    : portfolioData.filter(p => p.category === selectedCategory);

  // Fonction WhatsApp
  const handleWhatsAppContact = () => {
    const message = "Bonjour SDIEP, j'ai vu vos réalisations et je souhaite démarrer un projet similaire.";
    const whatsappNumber = '2250574378201';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="portfolio-page">
      {/* Hero */}
      <div className="portfolio-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Nos Réalisations</h1>
            <p>Plus de 500 projets réussis à Abidjan et environs</p>
          </div>
        </div>
      </div>

      {/* Intro */}
      <section className="portfolio-intro">
        <div className="container">
          <div className="intro-text">
            <p>
              Découvrez quelques-uns de nos projets récents. Du résidentiel au commercial, 
              nous accompagnons nos clients avec professionnalisme et expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Filtres */}
      <section className="portfolio-filters-section">
        <div className="container">
          <div className="filters-wrapper">
            <div className="filter-buttons">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.name}
                </button>
              ))}
            </div>
            <div className="projects-count">
              {filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="portfolio-gallery">
        <div className="container">
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-badge">{project.service}</div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <div className="project-meta">
                    <span><FaUser /> {project.client}</span>
                    <span><FaCalendar /> {project.annee}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              <FaTimes />
            </button>

            <div className="modal-layout">
              {/* Image */}
              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>

              {/* Détails */}
              <div className="modal-details">
                <h2>{selectedProject.title}</h2>
                
                <div className="modal-info-grid">
                  <div className="info-item">
                    <span className="info-label">Service</span>
                    <span className="info-value">{selectedProject.service}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Client</span>
                    <span className="info-value">{selectedProject.client}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Année</span>
                    <span className="info-value">{selectedProject.annee}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Durée</span>
                    <span className="info-value">{selectedProject.duree}</span>
                  </div>
                </div>

                <div className="modal-description">
                  <h4>Description</h4>
                  <p>{selectedProject.description}</p>
                </div>

                <div className="modal-services">
                  <h4>Services réalisés</h4>
                  <ul>
                    {selectedProject.services.map((service, idx) => (
                      <li key={idx}>
                        <FaCheck /> {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="portfolio-cta">
        <div className="container">
          <div className="cta-box">
            <div className="cta-text">
              <h2>Un projet similaire ?</h2>
              <p>Contactez-nous pour discuter de votre projet</p>
            </div>
            <div className="cta-actions">
              <button onClick={handleWhatsAppContact} className="btn-whatsapp">
                <FaWhatsapp /> WhatsApp
              </button>
              <a href="tel:+2250574378201" className="btn-phone">
                <FaPhone /> Appelez-nous
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;