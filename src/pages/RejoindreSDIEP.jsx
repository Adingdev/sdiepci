import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaUserTie, FaHandshake, FaMoneyBillWave, FaClock, FaShieldAlt, 
  FaChartLine, FaUsers, FaTools, FaCheckCircle, FaStar, FaAward,
  FaPhoneAlt, FaClipboardCheck, FaHome, FaRegCalendarCheck
} from 'react-icons/fa';
import CandidatureModal from '../components/common/CandidatureModal';
import './PageStyles.css';
import './RejoindreSDIEP.css';

const RejoindreSDIEP = () => {
  const [candidatureOpen, setCandidatureOpen] = useState(false);

  const avantages = [
    {
      icon: FaMoneyBillWave,
      titre: "Revenus Réguliers",
      description: "Missions fréquentes et rémunération compétitive. Nous garantissons un flux constant de projets pour assurer vos revenus."
    },
    {
      icon: FaClock,
      titre: "Flexibilité Totale",
      description: "Choisissez vos horaires et vos missions. Vous restez indépendant tout en bénéficiant d'un réseau solide."
    },
    {
      icon: FaShieldAlt,
      titre: "Assurance Professionnelle",
      description: "Bénéficiez d'une couverture pour vos interventions. Travaillez en toute sérénité avec notre protection."
    },
    {
      icon: FaChartLine,
      titre: "Développement Professionnel",
      description: "Accès à des formations régulières et perfectionnement de vos compétences aux nouvelles techniques."
    },
    {
      icon: FaUsers,
      titre: "Réseau de Professionnels",
      description: "Intégrez une communauté de plus de 50 artisans qualifiés et partagez votre expertise."
    },
    {
      icon: FaAward,
      titre: "Reconnaissance & Valorisation",
      description: "Votre travail est mis en valeur auprès d'une large clientèle d'entreprises et particuliers."
    }
  ];

  const besoins = [
    {
      metier: "Plombiers",
      icon: FaTools,
      nombre: "5+",
      missions: ["Installation sanitaire", "Dépannage d'urgence", "Rénovation plomberie", "Détection de fuites"],
      demande: "Forte"
    },
    {
      metier: "Électriciens",
      icon: FaTools,
      nombre: "5+",
      missions: ["Installation électrique", "Mise aux normes", "Dépannage", "Installation domotique"],
      demande: "Très forte"
    },
    {
      metier: "Carreleurs",
      icon: FaTools,
      nombre: "3+",
      missions: ["Pose carrelage", "Faïence murale", "Terrasse extérieure", "Rénovation sols"],
      demande: "Forte"
    },
    {
      metier: "Peintres",
      icon: FaTools,
      nombre: "4+",
      missions: ["Peinture intérieure", "Ravalement façade", "Décoration", "Finitions"],
      demande: "Moyenne"
    },
    {
      metier: "Menuisiers",
      icon: FaTools,
      nombre: "3+",
      missions: ["Menuiserie sur mesure", "Installation portes/fenêtres", "Agencement", "Réparation"],
      demande: "Forte"
    },
    {
      metier: "Vitriers",
      icon: FaTools,
      nombre: "2+",
      missions: ["Installation vitrage", "Réparation urgente", "Double vitrage", "Miroiterie"],
      demande: "Moyenne"
    }
  ];

  const conditions = [
    {
      titre: "Expérience Professionnelle",
      items: [
        "Minimum 2 ans d'expérience dans votre métier",
        "Références vérifiables de clients satisfaits",
        "Portfolio de vos réalisations (photos de chantiers)"
      ]
    },
    {
      titre: "Équipement & Autonomie",
      items: [
        "Posséder vos propres outils professionnels",
        "Moyen de transport personnel pour vous déplacer",
        "Capacité à travailler de manière autonome"
      ]
    },
    {
      titre: "Documents Requis",
      items: [
        "Pièce d'identité valide (CNI ou passeport)",
        "Justificatif de domicile récent",
        "Attestations de formations (si disponibles)"
      ]
    },
    {
      titre: "Qualités Professionnelles",
      items: [
        "Ponctualité et respect des délais",
        "Excellente relation client",
        "Souci du détail et finitions soignées",
        "Professionnalisme et présentation soignée"
      ]
    }
  ];

  const processus = [
    {
      etape: "1",
      titre: "Candidature",
      description: "Remplissez le formulaire en ligne avec vos informations et votre métier",
      icon: FaClipboardCheck
    },
    {
      etape: "2",
      titre: "Évaluation",
      description: "Notre équipe examine votre profil, votre expérience et vos références",
      icon: FaUserTie
    },
    {
      etape: "3",
      titre: "Entretien",
      description: "Rencontre physique ou visio pour discuter de votre parcours et vos attentes",
      icon: FaPhoneAlt
    },
    {
      etape: "4",
      titre: "Test Pratique",
      description: "Petite mission test pour évaluer vos compétences techniques sur le terrain",
      icon: FaTools
    },
    {
      etape: "5",
      titre: "Intégration",
      description: "Formation à nos process, signature du partenariat et premières missions",
      icon: FaHandshake
    }
  ];

  const temoignages = [
    {
      nom: "Kouadio Jean",
      metier: "Plombier",
      experience: "3 ans avec SDIEP",
      photo: "/images/temoignages/plombier.jpg",
      texte: "Depuis que j'ai rejoint SDIEP, j'ai des missions régulières et des clients de qualité. L'équipe est professionnelle et le paiement est toujours à temps. Je recommande vivement !",
      note: 5
    },
    {
      nom: "Koné Abdoulaye",
      metier: "Électricien",
      experience: "2 ans avec SDIEP",
      photo: "/images/temoignages/electricien.jpg",
      texte: "SDIEP m'a permis de développer mon activité en toute sérénité. Les chantiers sont bien organisés et je peux gérer mon emploi du temps comme je veux. C'est parfait !",
      note: 5
    },
    {
      nom: "Yao Marie",
      metier: "Peintre",
      experience: "1 an avec SDIEP",
      photo: "/images/temoignages/peintre.jpg",
      texte: "En tant que femme dans ce métier, j'apprécie particulièrement le respect et la valorisation de mon travail chez SDIEP. Les clients sont satisfaits et je suis fière de mes réalisations.",
      note: 5
    }
  ];

  return (
    <div className="rejoindre-page">
      {/* Hero Section */}
      <div className="page-hero rejoindre-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Rejoignez l'Équipe SDIEP</h1>
          <p>Développez votre activité avec le leader des services du bâtiment</p>
          <button 
            className="btn-hero-candidature"
            onClick={() => setCandidatureOpen(true)}
          >
            <FaUserTie /> Postuler Maintenant
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
            <p className="intro-text-large">
              SDIEP n'est pas qu'une plateforme d'intermédiation, c'est une <strong>famille de professionnels</strong> engagés 
              dans l'excellence. Nous valorisons le travail de chaque artisan et assurons votre succès professionnel.
            </p>
            <p className="intro-text-large">
              Avec <strong>plus de 500 projets réalisés</strong> et une clientèle fidèle en constante croissance, 
              nous vous garantissons des missions régulières et une rémunération équitable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Avantages */}
      <section className="avantages-section">
        <div className="container">
          <h2 className="section-title-center">Vos Avantages</h2>
          <div className="avantages-grid">
            {avantages.map((avantage, index) => {
              const IconComponent = avantage.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="avantage-card"
                >
                  <div className="avantage-icon">
                    <IconComponent />
                  </div>
                  <h3>{avantage.titre}</h3>
                  <p>{avantage.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nos Besoins */}
      <section className="besoins-section">
        <div className="container">
          <h2 className="section-title-center">Nos Besoins Actuels</h2>
          <p className="section-subtitle-center">
            Nous recrutons activement dans les métiers suivants
          </p>
          <div className="besoins-grid">
            {besoins.map((besoin, index) => {
              const IconComponent = besoin.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="besoin-card"
                >
                  <div className="besoin-header">
                    <IconComponent className="besoin-icon" />
                    <div>
                      <h3>{besoin.metier}</h3>
                      <span className="besoin-nombre">{besoin.nombre} postes</span>
                    </div>
                    <span className={`besoin-badge ${besoin.demande === 'Très forte' ? 'urgent' : besoin.demande === 'Forte' ? 'forte' : 'normale'}`}>
                      {besoin.demande}
                    </span>
                  </div>
                  <div className="besoin-missions">
                    <strong>Types de missions :</strong>
                    <ul>
                      {besoin.missions.map((mission, idx) => (
                        <li key={idx}>
                          <FaCheckCircle /> {mission}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="conditions-section">
        <div className="container">
          <h2 className="section-title-center">Conditions de Recrutement</h2>
          <p className="section-subtitle-center">
            Ce que nous attendons de nos partenaires professionnels
          </p>
          <div className="conditions-grid">
            {conditions.map((condition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="condition-card"
              >
                <h3>{condition.titre}</h3>
                <ul>
                  {condition.items.map((item, idx) => (
                    <li key={idx}>
                      <FaCheckCircle /> {item}
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
          <h2 className="section-title-center">Processus de Recrutement</h2>
          <p className="section-subtitle-center">
            5 étapes simples pour intégrer notre réseau
          </p>
          <div className="processus-timeline">
            {processus.map((etape, index) => {
              const IconComponent = etape.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="processus-step"
                >
                  <div className="step-number">{etape.etape}</div>
                  <div className="step-icon">
                    <IconComponent />
                  </div>
                  <h3>{etape.titre}</h3>
                  <p>{etape.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="temoignages-section">
        <div className="container">
          <h2 className="section-title-center">Ils Nous Font Confiance</h2>
          <p className="section-subtitle-center">
            Découvrez les témoignages de nos partenaires
          </p>
          <div className="temoignages-grid">
            {temoignages.map((temoignage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
                  <div className="auteur-info">
                    <strong>{temoignage.nom}</strong>
                    <span>{temoignage.metier} • {temoignage.experience}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="rejoindre-cta">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="cta-box-rejoindre"
          >
            <h2>Prêt à Rejoindre l'Aventure SDIEP ?</h2>
            <p>Envoyez votre candidature dès maintenant et commencez à développer votre activité avec nous</p>
            <div className="cta-stats">
              <div className="stat">
                <strong>500+</strong>
                <span>Projets réalisés</span>
              </div>
              <div className="stat">
                <strong>50+</strong>
                <span>Artisans partenaires</span>
              </div>
              <div className="stat">
                <strong>95%</strong>
                <span>Clients satisfaits</span>
              </div>
            </div>
            <button 
              className="btn-cta-large"
              onClick={() => setCandidatureOpen(true)}
            >
              <FaUserTie /> Postuler Maintenant
            </button>
            <p className="cta-note">Processus de recrutement : 7 à 10 jours</p>
          </motion.div>
        </div>
      </section>

      <CandidatureModal 
        isOpen={candidatureOpen} 
        onClose={() => setCandidatureOpen(false)} 
      />
    </div>
  );
};

export default RejoindreSDIEP;