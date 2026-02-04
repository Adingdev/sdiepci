import React from 'react';
import { FaCheckCircle, FaPhone, FaWhatsapp } from 'react-icons/fa';
import './PageStyles.css';
import './About.css';

const About = () => {
  const values = [
    {
      title: "Qualité",
      description: "Des prestations irréprochables grâce à nos artisans qualifiés et expérimentés"
    },
    {
      title: "Confiance",
      description: "Transparence totale sur nos tarifs et interventions sécurisées"
    },
    {
      title: "Disponibilité",
      description: "Service 24/7 pour vos urgences et projets planifiés"
    },
    {
      title: "Professionnalisme",
      description: "Des experts formés pour structurer les métiers du bâtiment"
    },
    {
      title: "Santé et sécurité",
      description: "En visant l'objectif « Zéro incident » nous faisons de la santé et de la sécurité au travail une préoccupation constante"
    },
    {
      title: "Satisfaction client",
      description: "Tout mettre en œuvre pour la satisfaction durable de nos clients"
    }
  ];

  const experts = [
    {
      name: "Plombiers",
      specialite: "Installation et dépannage",
      image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop"
    },
    {
      name: "Électriciens",
      specialite: "Mise aux normes",
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=300&fit=crop"
    },
    {
      name: "Carreleurs",
      specialite: "Pose & Rénovation",
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=400&h=300&fit=crop"
    },
    {
      name: "Peintres",
      specialite: "Finitions",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop"
    },
    {
      name: "Vitriers",
      specialite: "Installation",
      image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=400&h=300&fit=crop"
    },
    {
      name: "Menuisiers",
      specialite: "Sur Mesure",
      image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=400&h=300&fit=crop"
    }
  ];

  // Fonction WhatsApp
  const handleWhatsAppContact = () => {
    const message = "Bonjour SDIEP, je souhaite obtenir plus d'informations sur vos services.";
    const whatsappNumber = '2250574378201';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="about-page">
      {/* Hero */}
      <div className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1>À Propos de SDIEP</h1>
            <p>Service Dépannage Immobilier Entreprises et Particuliers</p>
          </div>
        </div>
      </div>

      {/* Présentation */}
      <section className="about-presentation">
        <div className="container">
          <div className="presentation-layout">
            <div className="presentation-image">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=700&fit=crop" 
                alt="Équipe SDIEP" 
              />
            </div>
            <div className="presentation-text">
              <h2>Qui sommes-nous ?</h2>
              <p>
                <strong>SDIEP</strong> est une structure d'intermédiation entre les clients et des prestataires qualifiés dans les métiers du bâtiment : plomberie, électricité, peinture, carrelage, vitrerie et menuiserie.
              </p>
              <p>
                Nous recrutons, encadrons et déployons des professionnels pour des missions d'installation, de création, de réparation et de rénovation de biens immobiliers.
              </p>
              <p>
                Notre objectif : <strong>structurer et professionnaliser des métiers souvent exercés dans l'ombre</strong>, en valorisant des ouvriers expérimentés et formés.
              </p>
              
              <div className="stats-inline">
                <div className="stat-inline">
                  <strong>500+</strong>
                  <span>Interventions</span>
                </div>
                <div className="stat-inline">
                  <strong>50+</strong>
                  <span>Artisans</span>
                </div>
                <div className="stat-inline">
                  <strong>6</strong>
                  <span>Métiers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre engagement */}
      <section className="about-engagement">
        <div className="container">
          <h2>Notre engagement</h2>
          <div className="engagement-grid">
            <div className="engagement-item">
              <h4>Qualité irréprochable</h4>
              <p>Des interventions rapides et sécurisées par des artisans certifiés</p>
            </div>
            <div className="engagement-item">
              <h4>Transparence totale</h4>
              <p>Devis clairs et détaillés, sans frais cachés</p>
            </div>
            <div className="engagement-item">
              <h4>Disponibilité 24/7</h4>
              <p>Service d'urgence disponible tous les jours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-mission">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-box">
              <h3>Notre mission</h3>
              <p>
                Connecter les entreprises et particuliers avec les meilleurs artisans du bâtiment. Nous garantissons des interventions professionnelles, rapides et sécurisées pour tous vos besoins. Notre rôle est de simplifier votre quotidien en vous offrant un service clé en main.
              </p>
            </div>
            <div className="mission-box">
              <h3>Notre vision</h3>
              <p>
                Devenir la référence incontournable en Côte d'Ivoire dans l'intermédiation des services du bâtiment. Nous aspirons à créer un écosystème où chaque artisan qualifié trouve sa place et où chaque client bénéficie d'un service de qualité supérieure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="about-values">
        <div className="container">
          <h2>Nos valeurs</h2>
          <div className="values-list">
            {values.map((value, index) => (
              <div key={index} className="value-item">
                <div className="value-header">
                  <FaCheckCircle />
                  <h4>{value.title}</h4>
                </div>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos équipes */}
      <section className="about-teams">
        <div className="container">
          <h2>Nos équipes d'experts</h2>
          <p className="teams-subtitle">Des professionnels qualifiés pour vos projets</p>
          <div className="teams-grid">
            {experts.map((expert, index) => (
              <div key={index} className="team-card">
                <div className="team-image">
                  <img src={expert.image} alt={expert.name} />
                </div>
                <div className="team-info">
                  <h4>{expert.name}</h4>
                  <span>{expert.specialite}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-box">
            <div className="cta-text">
              <h2>Un projet en tête ?</h2>
              <p>Contactez-nous pour un devis gratuit</p>
            </div>
            <div className="cta-actions">
              <button onClick={handleWhatsAppContact} className="btn-cta-whatsapp">
                <FaWhatsapp /> WhatsApp
              </button>
              <a href="tel:+2250574378201" className="btn-cta-phone">
                <FaPhone /> Appelez-nous
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;