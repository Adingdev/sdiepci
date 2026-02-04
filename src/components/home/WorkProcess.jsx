import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaTools, FaDrawPolygon, FaCheckCircle } from 'react-icons/fa';
import './WorkProcess.css';

const WorkProcess = () => {
  const steps = [
    {
      id: 1,
      icon: FaHandshake,
      title: "Demande de Devis",
      description: "Contactez-nous pour une estimation gratuite. Nous analysons vos besoins et vous proposons un devis détaillé."
    },
    {
      id: 2,
      icon: FaTools,
      title: "Visite Technique",
      description: "Nos experts se déplacent pour évaluer les travaux sur place et confirmer les détails du projet."
    },
    {
      id: 3,
      icon: FaDrawPolygon,
      title: "Planification",
      description: "Organisation du chantier, commande des matériaux et planification des interventions."
    },
    {
      id: 4,
      icon: FaCheckCircle,
      title: "Réalisation",
      description: "Exécution professionnelle des travaux dans les délais convenus avec garantie de qualité."
    }
  ];

  return (
    <section className="work-process">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Notre démarche</span>
          <h2 className="section-title">Comment travaillons-nous ?</h2>
          <p className="section-description">
            Un processus structuré en 4 étapes pour garantir le succès de votre projet
          </p>
        </div>

        <div className="process-timeline">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="process-step"
              >
                <div className="step-number">{step.id}</div>
                <div className="step-icon">
                  <IconComponent />
                </div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
