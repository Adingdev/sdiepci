import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp } from 'react-icons/fa';
import './contact.css';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  // Numéro WhatsApp de SDIEP (remplacez par votre vrai numéro)
  const whatsappNumber = '2250574378201'; // Format: code pays + numéro (sans espaces ni +)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Création du message WhatsApp formaté
    const message = `
🔧 *NOUVEAU MESSAGE DE CONTACT - SDIEP*

👤 *Nom:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Téléphone:* ${formData.phone}
🛠️ *Service demandé:* ${formData.service || 'Non spécifié'}

💬 *Message:*
${formData.message}

---
_Message envoyé depuis le site web SDIEP_
    `.trim();

    // Encoder le message pour l'URL
    const encodedMessage = encodeURIComponent(message);
    
    // Créer le lien WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Ouvrir WhatsApp dans un nouvel onglet
    window.open(whatsappUrl, '_blank');
    
    // Réinitialiser le formulaire
    setFormData({ 
      name: '', 
      email: '', 
      phone: '', 
      service: '',
      message: '' 
    });
  };

  // Fonction pour contact direct WhatsApp
  const handleWhatsAppDirect = () => {
    const quickMessage = encodeURIComponent('Bonjour SDIEP, je souhaite obtenir plus d\'informations sur vos services.');
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${quickMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="page-container">
      <div className="page-hero contact-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Contactez-nous</h1>
          <p>Nous sommes à votre écoute pour tous vos projets</p>
        </div>
      </div>

      <div className="page-content">
        <div className="container">
          <div className="contact-grid">
            {/* Formulaire de contact */}
            <div className="contact-form-section">
              <h2>Envoyez-nous un message</h2>
              <p className="form-subtitle">
                Remplissez le formulaire ci-dessous et nous vous contacterons via WhatsApp
              </p>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Nom complet *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Votre nom complet"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Adresse email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="exemple@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Numéro de téléphone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+225 XX XX XX XX XX"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service souhaité</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="Plomberie">Plomberie</option>
                    <option value="Électricité">Électricité</option>
                    <option value="Carrelage">Carrelage</option>
                    <option value="Peinture">Peinture</option>
                    <option value="Vitrerie">Vitrerie</option>
                    <option value="Menuiserie">Menuiserie</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Votre message *</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Décrivez votre projet ou votre demande..."
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  <FaWhatsapp className="btn-icon" />
                  Envoyer via WhatsApp
                </button>

                <p className="form-note">
                  * En cliquant sur "Envoyer", vous serez redirigé vers WhatsApp avec votre message pré-rempli
                </p>
              </form>
            </div>

            {/* Informations de contact */}
            <div className="contact-info-section">
              <h2>Informations de contact</h2>
              
              <div className="info-card">
                <FaMapMarkerAlt className="info-icon" />
                <div>
                  <h4>Adresse</h4>
                  <p>Abidjan, Côte d'Ivoire</p>
                </div>
              </div>

              <div className="info-card">
                <FaPhone className="info-icon" />
                <div>
                  <h4>Téléphone</h4>
                  <p>+225 05 74 37 82 01</p>
                </div>
              </div>

              <div className="info-card">
                <FaEnvelope className="info-icon" />
                <div>
                  <h4>Email</h4>
                  <p>sdiepcotedivoire@gmail.com</p>
                </div>
              </div>

              <div className="info-card">
                <FaClock className="info-icon" />
                <div>
                  <h4>Horaires</h4>
                  <p>Lundi - Samedi</p>
                  <p>08H00 - 18H30</p>
                </div>
              </div>

              {/* Bouton WhatsApp direct */}
              <div className="whatsapp-direct">
                <h3>Besoin d'une réponse rapide ?</h3>
                <button onClick={handleWhatsAppDirect} className="whatsapp-btn">
                  <FaWhatsapp className="whatsapp-icon" />
                  Discuter sur WhatsApp
                </button>
                <p className="whatsapp-note">
                  Disponible 24/7 pour vos urgences
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Map (optionnelle) */}
      <div className="map-section">
        <div className="container">
          <h2>Notre Localisation</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127152.89805248894!2d-4.07836!3d5.3599517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1eb26345b9a37%3A0x33e1d63c6d79b5a8!2sAbidjan%2C%20C%C3%B4te%20d&#39;Ivoire!5e0!3m2!1sfr!2sfr!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation SDIEP"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;