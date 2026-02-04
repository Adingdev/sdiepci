import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { servicesData } from '../../data/servicesData';
import './Services.css';

const Services = () => {
  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Nos Services</span>
          <h2 className="section-title">Ce que nous faisons de mieux</h2>
          <p className="section-description">
            Des services professionnels pour tous vos travaux de rénovation et d'aménagement
          </p>
        </div>

        <div className="services-grid-modern">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="service-card-dsimmo"
    >
      <div className="service-image-container">
        <img src={service.image} alt={service.title} className="service-image-full" />
        <div className="service-title-overlay">
          <div 
            className="service-title-clickable"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="title-bar"></div>
            <h3>{service.title.toUpperCase()}</h3>
          </div>
        </div>
      </div>
      
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="service-info-expanded"
        >
          <p className="service-description-brief">{service.description}</p>
          <Link to={`/services/${service.slug}`} className="btn-en-savoir-plus">
            En savoir plus <FaArrowRight />
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Services;
