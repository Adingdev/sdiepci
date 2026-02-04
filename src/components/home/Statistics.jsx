import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkedAlt, FaHome, FaLandmark, FaTruck } from 'react-icons/fa';
import './Statistics.css';

const Statistics = () => {
  const stats = [
    {
      id: 1,
      icon: FaMapMarkedAlt,
      number: "500+",
      label: "Projets réalisés avec succès"
    },
    {
      id: 2,
      icon: FaHome,
      number: "1000+",
      label: "Clients satisfaits"
    },
    {
      id: 3,
      icon: FaLandmark,
      number: "15+",
      label: "Années d'expérience"
    },
    {
      id: 4,
      icon: FaTruck,
      number: "6",
      label: "Corps de métiers spécialisés"
    }
  ];

  return (
    <section className="statistics">
      <div className="stats-overlay"></div>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="stat-card"
              >
                <div className="stat-icon">
                  <IconComponent />
                </div>
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
