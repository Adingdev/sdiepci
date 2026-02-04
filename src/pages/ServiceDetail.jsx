import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaPhone, FaWhatsapp, FaClock, FaTools, FaShieldAlt } from 'react-icons/fa';
import { servicesData } from '../data/servicesData';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="page-container">
        <div className="page-hero">
          <h1>Service non trouvé</h1>
        </div>
        <div className="container" style={{ padding: '60px 20px', textAlign: 'center' }}>
          <p>Le service demandé n'existe pas.</p>
          <Link to="/services" className="btn btn-primary" style={{ marginTop: '20px', display: 'inline-block' }}>
            Voir tous les services
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = service.icon;

  // Fonction pour ouvrir WhatsApp
  const handleWhatsAppContact = () => {
    const message = `Bonjour SDIEP, je suis intéressé par votre service de ${service.title}. Pouvez-vous me donner plus d'informations ?`;
    const whatsappNumber = '2250574378201';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="service-detail-page">
      {/* Hero Section simplifié */}
      <div className="service-hero">
        <div className="service-hero-bg" style={{ backgroundImage: `url(${service.image})` }}>
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="service-hero-content">
            <div className="service-badge">
              <IconComponent />
            </div>
            <h1>{service.title}</h1>
            <p className="service-intro">{service.description}</p>
            <div className="hero-actions">
              <button onClick={handleWhatsAppContact} className="btn-whatsapp">
                <FaWhatsapp /> Devis gratuit sur WhatsApp
              </button>
              <Link to="/contact" className="btn-secondary">
                <FaPhone /> Appelez-nous
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Section principale */}
      <div className="service-main">
        <div className="container">
          <div className="service-layout">
            {/* Colonne principale */}
            <div className="service-main-content">
              {/* Description */}
              <div className="content-section">
                <h2>En quoi consiste ce service ?</h2>
                <p className="service-description">{service.detailedDescription}</p>
              </div>

              {/* Prestations */}
              <div className="content-section">
                <h2>Nos prestations</h2>
                <div className="prestations-grid">
                  {service.features.map((feature, index) => (
                    <div key={index} className="prestation-item">
                      <FaCheckCircle />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pourquoi nous choisir */}
              <div className="content-section why-us">
                <h2>Pourquoi choisir SDIEP ?</h2>
                <div className="why-us-grid">
                  <div className="why-item">
                    <FaTools className="why-icon" />
                    <h4>Artisans qualifiés</h4>
                    <p>Tous nos professionnels sont formés et expérimentés</p>
                  </div>
                  <div className="why-item">
                    <FaClock className="why-icon" />
                    <h4>Intervention rapide</h4>
                    <p>Disponibilité 24/7 pour vos urgences</p>
                  </div>
                  <div className="why-item">
                    <FaShieldAlt className="why-icon" />
                    <h4>Garantie qualité</h4>
                    <p>Travail soigné et garanti</p>
                  </div>
                </div>
              </div>

              {/* Conseils pratiques */}
              <div className="content-section conseils-section">
                <h2>Conseils pratiques</h2>
                <div className="conseils-container">
                  {service.conseils.map((conseil, index) => (
                    <div key={index} className="conseil-item">
                      <span className="conseil-number">{index + 1}</span>
                      <p>{conseil}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar simplifié */}
            <aside className="service-sidebar">
              {/* Carte contact urgence */}
              <div className="sidebar-box contact-box">
                <div className="box-header">
                  <h3>Besoin urgent ?</h3>
                  <p>Contactez-nous maintenant</p>
                </div>
                <div className="contact-details">
                  <a href="tel:+2250574378201" className="contact-link phone-link">
                    <FaPhone />
                    <div>
                      <span className="label">Appelez-nous</span>
                      <strong>+225 05 74 37 82 01</strong>
                    </div>
                  </a>
                  <button onClick={handleWhatsAppContact} className="contact-link whatsapp-link">
                    <FaWhatsapp />
                    <div>
                      <span className="label">WhatsApp</span>
                      <strong>Discuter maintenant</strong>
                    </div>
                  </button>
                </div>
                <div className="box-footer">
                  <p><FaClock /> Lun - Sam : 08h00 - 18h30</p>
                </div>
              </div>

              {/* Carte devis */}
              <div className="sidebar-box devis-box">
                <h3>Demander un devis</h3>
                <p>Gratuit et sans engagement</p>
                <Link to="/contact" className="btn-devis">
                  Obtenir mon devis
                </Link>
              </div>

              {/* Autres services */}
              <div className="sidebar-box autres-services-box">
                <h3>Nos autres services</h3>
                <ul className="services-list">
                  {servicesData
                    .filter(s => s.id !== service.id)
                    .slice(0, 5)
                    .map(s => (
                      <li key={s.id}>
                        <Link to={`/services/${s.slug}`}>{s.title}</Link>
                      </li>
                    ))}
                </ul>
                <Link to="/services" className="view-all-link">
                  Voir tous les services →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;