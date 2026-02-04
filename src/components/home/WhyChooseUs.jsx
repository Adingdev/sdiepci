import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaShieldAlt, FaSmile } from 'react-icons/fa';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      icon: FaAward,
      title: "Expertise & Qualité",
      description: "Des artisans qualifiés et expérimentés pour garantir la qualité de chaque intervention. Nous utilisons des matériaux de première qualité et respectons les normes en vigueur."
    },
    {
      id: 2,
      icon: FaUsers,
      title: "Service Client",
      description: "À l'écoute de vos besoins, nous vous accompagnons de la conception à la réalisation de vos projets. Conseils personnalisés et suivi régulier."
    },
    {
      id: 3,
      icon: FaShieldAlt,
      title: "Fiabilité & Ponctualité",
      description: "Respect des délais et des engagements. Nous garantissons nos travaux et assurons un service après-vente de qualité."
    },
    {
      id: 4,
      icon: FaSmile,
      title: "Prix Compétitifs",
      description: "Des tarifs transparents et compétitifs sans compromis sur la qualité. Devis gratuit et détaillé pour tous vos projets."
    },
     {
      id: 5,
      icon: FaSmile,
      title: "Santé et sécurité",
      description: "En visant l'objectif << Zéro incident >> nous faisons de la santé et de la sécurité au travail une préoccupation constance ."
    },
     {
      id: 6,
      icon: FaShieldAlt,
      title: "Satisfaction du client",
      description: "Tout mettre en oeuvre pour la satisfaction durable de nos clients constitue l'aboutisement majeur de le synergie engagée par l'ensemble de nos services."
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Pourquoi nous choisir</span>
          <h2 className="section-title">Nos Valeurs</h2>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="reason-card"
              >
                <div className="reason-icon">
                  <IconComponent />
                </div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
