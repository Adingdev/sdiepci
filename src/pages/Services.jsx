import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPhone, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import { servicesData } from '../data/servicesData';
import './PageStyles.css';
import './ServicesPage.css';

const Services = () => {
  // Fonction pour ouvrir WhatsApp
  const handleWhatsAppContact = (serviceName) => {
    const message = `Bonjour SDIEP, je suis intéressé par votre service de ${serviceName}. Pouvez-vous me donner plus d'informations ?`;
    const whatsappNumber = '2250574378201';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="services-page">
      {/* Hero Section */}
      <div className="services-hero">
        <div className="container">
          <div className="hero-wrapper">
            <div className="hero-text">
              <h1>Nos Services</h1>
              <p>Solutions professionnelles pour tous vos travaux de bâtiment à Abidjan</p>
            </div>
            <div className="hero-contact">
              <p className="hero-label">Besoin d'un devis ?</p>
              <a href="tel:+2250574378201" className="hero-phone">
                <FaPhone /> +225 05 74 37 82 01
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Intro rapide */}
      <section className="services-intro">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-col">
              <h2>6 corps de métiers</h2>
              <p>Du plombier au menuisier, tous les artisans dont vous avez besoin</p>
            </div>
            <div className="intro-col">
              <h2>Service 24/7</h2>
              <p>Interventions d'urgence disponibles jour et nuit</p>
            </div>
            <div className="intro-col">
              <h2>500+ projets</h2>
              <p>Particuliers et entreprises nous font confiance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Liste des services */}
      <section className="services-list-section">
        <div className="container">
          <div className="services-grid">
            {servicesData.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={service.id} className="service-box">
                  {/* Image */}
                  <div className="service-image">
                    <img src={service.image} alt={service.title} />
                    <div className="service-icon-badge">
                      <IconComponent />
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="service-body">
                    <h3>{service.title}</h3>
                    <p className="service-desc">{service.description}</p>

                    {/* Prestations principales (3 max) */}
                    <ul className="service-highlights">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx}>
                          <FaCheckCircle /> {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Actions */}
                    <div className="service-actions">
                      <Link to={`/services/${service.slug}`} className="btn-details">
                        En savoir plus <FaArrowRight />
                      </Link>
                      <button 
                        onClick={() => handleWhatsAppContact(service.title)} 
                        className="btn-whatsapp-service"
                      >
                        <FaWhatsapp /> Devis
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section Avantages */}
      <section className="advantages-section">
        <div className="container">
          <h2>Pourquoi nous choisir</h2>
          <div className="advantages-list">
            <div className="advantage-item">
              <span className="advantage-num">1</span>
              <div>
                <h4>Artisans certifiés</h4>
                <p>Tous nos professionnels sont qualifiés et expérimentés</p>
              </div>
            </div>
            <div className="advantage-item">
              <span className="advantage-num">2</span>
              <div>
                <h4>Devis transparent</h4>
                <p>Pas de frais cachés, vous savez exactement ce que vous payez</p>
              </div>
            </div>
            <div className="advantage-item">
              <span className="advantage-num">3</span>
              <div>
                <h4>Intervention rapide</h4>
                <p>Service d'urgence disponible 24h/24, 7j/7</p>
              </div>
            </div>
            <div className="advantage-item">
              <span className="advantage-num">4</span>
              <div>
                <h4>Travail garanti</h4>
                <p>Garantie sur tous nos travaux et service après-vente</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-wrapper">
            <div className="cta-text">
              <h2>Un projet en tête ?</h2>
              <p>Contactez-nous pour un devis</p>
            </div>
            <div className="cta-buttons">
              <button 
                onClick={() => handleWhatsAppContact("vos services")} 
                className="btn-cta-whatsapp"
              >
                <FaWhatsapp /> WhatsApp
              </button>
              <Link to="/contact" className="btn-cta-contact">
                <FaPhone /> Nous appeler
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;