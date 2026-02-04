import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCheckCircle, 
  FaHandshake, 
  FaMoneyBillWave, 
  FaCalendarAlt, 
  FaUsers, 
  FaShieldAlt,
  FaChartLine,
  FaTools,
  FaUserTie,
  FaClock,
  FaStar,
  FaPhone
} from 'react-icons/fa';
import CandidatureModal from '../components/common/CandidatureModal';
import './RejoindreEquipe.css';

const RejoindreEquipe = () => {
  const [candidatureOpen, setCandidatureOpen] = useState(false);

  const besoins = [
    {
      icon: FaTools,
      metier: 'Plombiers',
      description: 'Installation, réparation, dépannage sanitaire',
      places: '5 places'
    },
    {
      icon: FaTools,
      metier: 'Électriciens',
      description: 'Installation électrique, mise aux normes',
      places: '4 places'
    },
    {
      icon: FaTools,
      metier: 'Carreleurs',
      description: 'Pose de carrelage, faïence, mosaïque',
      places: '3 places'
    },
    {
      icon: FaTools,
      metier: 'Peintres',
      description: 'Peinture intérieure, extérieure, décoration',
      places: '4 places'
    },
    {
      icon: FaTools,
      metier: 'Menuisiers',
      description: 'Fabrication, pose, aménagements sur mesure',
      places: '3 places'
    },
    {
      icon: FaTools,
      metier: 'Vitriers',
      description: 'Pose, réparation de vitrages',
      places: '2 places'
    }
  ];

  const avantages = [
    {
      icon: FaMoneyBillWave,
      titre: 'Rémunération Attractive',
      description: 'Paiement rapide et régulier selon le volume de missions réalisées. Tarifs compétitifs du marché.'
    },
    {
      icon: FaCalendarAlt,
      titre: 'Missions Régulières',
      description: 'Flux constant de chantiers toute l\'année. Vous choisissez vos disponibilités et zones d\'intervention.'
    },
    {
      icon: FaUsers,
      titre: 'Accompagnement & Formation',
      description: 'Support technique, formations continues et accompagnement par notre équipe pour votre montée en compétences.'
    },
    {
      icon: FaShieldAlt,
      titre: 'Assurance & Sécurité',
      description: 'Couverture assurance professionnelle, contrats clairs et protection juridique pour tous nos artisans partenaires.'
    },
    {
      icon: FaChartLine,
      titre: 'Développement Professionnel',
      description: 'Possibilité d\'évolution, accès à des chantiers de plus grande envergure et reconnaissance de votre expertise.'
    },
    {
      icon: FaStar,
      titre: 'Visibilité & Réputation',
      description: 'Profitez de notre notoriété et de notre réseau de clients. Construisez votre réputation sur des projets de qualité.'
    }
  ];

  const conditions = [
    {
      titre: 'Expérience Professionnelle',
      items: [
        'Minimum 2 ans d\'expérience dans votre métier',
        'Références vérifiables de chantiers précédents',
        'Maîtrise des techniques et normes de votre domaine'
      ]
    },
    {
      titre: 'Outils & Équipements',
      items: [
        'Possession de vos propres outils professionnels',
        'Équipements de sécurité conformes aux normes',
        'Véhicule de déplacement (selon les missions)'
      ]
    },
    {
      titre: 'Documents Requis',
      items: [
        'Pièce d\'identité valide (CNI ou passeport)',
        'Certificats de formation ou diplômes professionnels',
        'Attestation de qualification professionnelle si applicable'
      ]
    },
    {
      titre: 'Qualités Recherchées',
      items: [
        'Ponctualité et respect des délais',
        'Excellent relationnel avec les clients',
        'Sens du travail bien fait et finitions soignées',
        'Disponibilité et réactivité'
      ]
    }
  ];

  const processus = [
    {
      etape: '01',
      titre: 'Candidature',
      description: 'Remplissez le formulaire de candidature en ligne avec vos informations et expérience.'
    },
    {
      etape: '02',
      titre: 'Vérification',
      description: 'Notre équipe vérifie votre profil, vos références et votre expérience professionnelle.'
    },
    {
      etape: '03',
      titre: 'Entretien',
      description: 'Rencontre avec notre responsable pour discuter de votre parcours et de vos attentes.'
    },
    {
      etape: '04',
      titre: 'Test Technique',
      description: 'Évaluation pratique de vos compétences sur un petit chantier témoin (rémunéré).'
    },
    {
      etape: '05',
      titre: 'Intégration',
      description: 'Formation à nos process, signature du contrat et attribution de vos premières missions.'
    }
  ];

  const temoignages = [
    {
      nom: 'Kouadio Serge',
      metier: 'Plombier',
      experience: '3 ans avec SDIEP',
      texte: 'Depuis que je travaille avec SDIEP, j\'ai des missions régulières et je suis payé à temps. L\'équipe est professionnelle et m\'aide à développer mon activité.',
      note: 5
    },
    {
      nom: 'Yao Marie',
      metier: 'Peintre',
      experience: '2 ans avec SDIEP',
      texte: 'SDIEP m\'a permis d\'accéder à des chantiers de qualité que je n\'aurais jamais eus seule. Les formations proposées m\'ont beaucoup aidée à progresser.',
      note: 5
    },
    {
      nom: 'Traoré Mamadou',
      metier: 'Électricien',
      experience: '4 ans avec SDIEP',
      texte: 'Ce que j\'apprécie le plus, c\'est la transparence. Les tarifs sont clairs, les contrats respectés. Je recommande à tous les professionnels sérieux.',
      note: 5
    }
  ];

  return (
    <>
      <div className="rejoindre-page">
        {/* Hero Section */}
        <div className="page-hero rejoindre-hero">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Rejoignez une entreprise sérieuse et engagée</h1>
            <p>Nous travaillons chaque jour avec des professionnels du terrain.
Si vous êtes motivé, sérieux et prêt à vous investir, votre place est peut-être parmi nous.</p>
            <button 
              className="btn-hero-cta"
              onClick={() => setCandidatureOpen(true)}
            >
              <FaUserTie /> Déposer ma candidature
            </button>
          </motion.div>
        </div>

        {/* Introduction */}
        <section className="rejoindre-intro">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="intro-content-rejoindre"
            >
              <h2>Pourquoi Rejoindre SDIEP ?</h2>
              <p className="intro-large">
               Chez SDIEP, nous intervenons sur des projets concrets, avec des équipes soudées et organisées.
Nous recherchons des personnes fiables, prêtes à travailler dans le respect des règles et des délais.
Ici, chacun connaît son rôle et avance avec responsabilité.
              </p>
              <p className="intro-large">
                En rejoignant notre réseau, vous bénéficiez d'un <strong>flux régulier de missions</strong>, d'une <strong>rémunération juste</strong>, 
                et d'un <strong>support continu</strong> pour vous aider à exceller dans votre métier.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Nos Besoins */}
        <section className="besoins-section">
          <div className="container">
            <h2 className="section-title-center">Nous Recherchons des Professionnels Qualifiés</h2>
            <p className="section-subtitle-center">
              Postes actuellement disponibles dans notre réseau
            </p>
            <div className="besoins-grid">
              {besoins.map((besoin, index) => {
                const IconComponent = besoin.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="besoin-card"
                  >
                    <div className="besoin-icon">
                      <IconComponent />
                    </div>
                    <h3>{besoin.metier}</h3>
                    <p>{besoin.description}</p>
                    <div className="besoin-places">{besoin.places}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Avantages */}
        <section className="avantages-section">
          <div className="container">
            <h2 className="section-title-center">Les Avantages de Travailler avec Nous</h2>
            <div className="avantages-grid">
              {avantages.map((avantage, index) => {
                const IconComponent = avantage.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="avantage-card"
                  >
                    <div className="avantage-icon">
                      <IconComponent />
                    </div>
                    <h4>{avantage.titre}</h4>
                    <p>{avantage.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Conditions */}
        <section className="conditions-section">
          <div className="container">
            <h2 className="section-title-center">Conditions pour Rejoindre Notre Réseau</h2>
            <p className="section-subtitle-center">
              Ce que nous attendons de nos partenaires professionnels
            </p>
            <div className="conditions-grid">
              {conditions.map((condition, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="condition-card"
                >
                  <h4>{condition.titre}</h4>
                  <ul>
                    {condition.items.map((item, idx) => (
                      <li key={idx}>
                        <FaCheckCircle className="check-icon" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Processus */}
        <section className="processus-section">
          <div className="container">
            <h2 className="section-title-center">Comment Rejoindre Notre Équipe ?</h2>
            <p className="section-subtitle-center">
              Un processus simple et transparent en 5 étapes
            </p>
            <div className="processus-timeline">
              {processus.map((etape, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="processus-item"
                >
                  <div className="processus-number">{etape.etape}</div>
                  <div className="processus-content">
                    <h4>{etape.titre}</h4>
                    <p>{etape.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className="temoignages-section">
          <div className="container">
            <h2 className="section-title-center">Ils Ont Rejoint SDIEP</h2>
            <p className="section-subtitle-center">
              Découvrez les témoignages de nos artisans partenaires
            </p>
            <div className="temoignages-grid">
              {temoignages.map((temoignage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="temoignage-card"
                >
                  <div className="temoignage-stars">
                    {[...Array(temoignage.note)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="temoignage-texte">"{temoignage.texte}"</p>
                  <div className="temoignage-auteur">
                    <strong>{temoignage.nom}</strong>
                    <span>{temoignage.metier}</span>
                    <span className="temoignage-experience">
                      <FaClock /> {temoignage.experience}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="cta-final-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="cta-final-content"
            >
              <h2>Prêt à Développer Votre Activité ?</h2>
              <p>Rejoignez dès maintenant notre réseau de professionnels qualifiés</p>
              <div className="cta-final-buttons">
                <button 
                  className="btn btn-primary-large"
                  onClick={() => setCandidatureOpen(true)}
                >
                  <FaUserTie /> Postuler en Ligne
                </button>
                <a href="tel:+2250574378201" className="btn btn-secondary-large">
                  <FaPhone /> Nous Appeler
                </a>
              </div>
              <p className="cta-info">
                <FaHandshake /> Rejoignez plus de <strong>150 professionnels</strong> qui nous font déjà confiance
              </p>
            </motion.div>
          </div>
        </section>
      </div>

      <CandidatureModal 
        isOpen={candidatureOpen} 
        onClose={() => setCandidatureOpen(false)} 
      />
    </>
  );
};

export default RejoindreEquipe;