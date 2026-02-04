import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaWhatsapp, FaTools } from 'react-icons/fa';
import './ReservationModal.css';

const ReservationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    services: [],
    datePreferee: '',
    heurePreferee: '',
    nomComplet: '',
    telephone: '',
    commune: '',
    quartier: ''
  });

  const servicesOptions = [
    'Plomberie',
    'Menuiserie',
    'Électricité',
    'Carrelage',
    'Peinture',
    'Vitrerie',
    'Autres'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (service) => {
    setFormData(prev => {
      const services = prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service];
      return { ...prev, services };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Vérifier que les champs obligatoires sont remplis
    if (formData.services.length === 0 || !formData.nomComplet || 
        !formData.telephone || !formData.commune) {
      alert('Veuillez remplir tous les champs obligatoires (*)');
      return;
    }

    // Créer le message WhatsApp
    const message = `🔧 *NOUVELLE RÉSERVATION DÉPANNAGE*

*Service(s) requis :*
${formData.services.map(s => `• ${s}`).join('\n')}

*Informations :*
${formData.datePreferee ? `📅 Date préférée : ${formData.datePreferee}` : ''}
${formData.heurePreferee ? `🕐 Heure préférée : ${formData.heurePreferee}` : ''}

*Contact :*
👤 Nom : ${formData.nomComplet}
📞 Téléphone : ${formData.telephone}
📍 Commune : ${formData.commune}
${formData.quartier ? `📍 Quartier : ${formData.quartier}` : ''}

---
Réservation via le site SDIEP`;

    // Encoder le message pour WhatsApp
    const encodedMessage = encodeURIComponent(message);
    
    // Numéro WhatsApp de SDIEP (à remplacer par votre numéro)
    const phoneNumber = '2250574378201'; // Remplacez par votre numéro
    
    // Ouvrir WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    
    // Réinitialiser le formulaire
    setFormData({
      services: [],
      datePreferee: '',
      heurePreferee: '',
      nomComplet: '',
      telephone: '',
      commune: '',
      quartier: ''
    });
    
    // Fermer le modal après un court délai
    setTimeout(() => {
      onClose();
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="reservation-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="reservation-modal"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close-btn" onClick={onClose}>
            <FaTimes />
          </button>

          <div className="modal-header">
            <div className="header-icon">
              <FaTools />
            </div>
            <h2>Réserver un Dépannage</h2>
          </div>

          <form className="reservation-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>
                Service(s) Requis <span className="required">*</span>
              </label>
              <div className="services-checkboxes">
                {servicesOptions.map((service, index) => (
                  <label key={index} className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={formData.services.includes(service)}
                      onChange={() => handleServiceChange(service)}
                    />
                    <span className="checkbox-custom"></span>
                    <span className="checkbox-text">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="datePreferee">
                  Date Préférée
                </label>
                <input
                  type="date"
                  id="datePreferee"
                  name="datePreferee"
                  value={formData.datePreferee}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="heurePreferee">
                  Heure Préférée
                </label>
                <input
                  type="time"
                  id="heurePreferee"
                  name="heurePreferee"
                  value={formData.heurePreferee}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="nomComplet">
                Nom Complet <span className="required">*</span>
              </label>
              <input
                type="text"
                id="nomComplet"
                name="nomComplet"
                value={formData.nomComplet}
                onChange={handleChange}
                placeholder="Ex: Jean Kouassi"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="telephone">
                Téléphone (WhatsApp) <span className="required">*</span>
              </label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                placeholder="Ex: 2250574378201"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="commune">
                  Commune <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="commune"
                  name="commune"
                  value={formData.commune}
                  onChange={handleChange}
                  placeholder="Ex: Cocody"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="quartier">
                  Quartier
                </label>
                <input
                  type="text"
                  id="quartier"
                  name="quartier"
                  value={formData.quartier}
                  onChange={handleChange}
                  placeholder="Ex: Riviera"
                />
              </div>
            </div>

            <button type="submit" className="btn-submit-reservation">
              <FaWhatsapp /> Envoyer la Réservation
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ReservationModal;