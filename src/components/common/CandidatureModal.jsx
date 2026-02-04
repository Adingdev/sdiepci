import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaInfoCircle, FaWhatsapp } from 'react-icons/fa';
import './CandidatureModal.css';

const CandidatureModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    metier: '',
    nomComplet: '',
    nationalite: '',
    numero1: '',
    numero2: '',
    adresse: ''
  });

  const metiers = [
    'Plombier',
    'Électricien',
    'Carreleur',
    'Peintre',
    'Vitrier',
    'Menuisier',
    'Maçon',
    'Climaticien',
    'Autre (préciser dans WhatsApp)'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Vérifier que les champs obligatoires sont remplis
    if (!formData.metier || !formData.nomComplet || !formData.nationalite || 
        !formData.numero1 || !formData.adresse) {
      alert('Veuillez remplir tous les champs obligatoires (*)');
      return;
    }

    // Créer le message WhatsApp
    const message = `🔧 *NOUVELLE CANDIDATURE PROFESSIONNEL*

*Métier :* ${formData.metier}
*Nom Complet :* ${formData.nomComplet}
*Nationalité :* ${formData.nationalite}
*Numéro WhatsApp :* ${formData.numero1}
${formData.numero2 ? `*Numéro 2 :* ${formData.numero2}` : ''}
*Adresse :* ${formData.adresse}

⚠️ *Photo CNI à envoyer dans cette discussion*

---
Candidature envoyée via le site SDIEP`;

    // Encoder le message pour WhatsApp
    const encodedMessage = encodeURIComponent(message);
    
    // Numéro WhatsApp de SDIEP (à remplacer par votre numéro)
    const phoneNumber = '2250574378201'; // Remplacez par votre numéro
    
    // Ouvrir WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    
    // Réinitialiser le formulaire
    setFormData({
      metier: '',
      nomComplet: '',
      nationalite: '',
      numero1: '',
      numero2: '',
      adresse: ''
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
        className="candidature-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="candidature-modal"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close-btn" onClick={onClose}>
            <FaTimes />
          </button>

          <div className="modal-header">
            <h2>Postuler comme Professionnel</h2>
          </div>

          <div className="modal-info-box">
            <div className="info-icon">
              <FaInfoCircle />
            </div>
            <div className="info-text">
              <strong>Information importante :</strong>
              <p>
                Ce formulaire est réservé aux professionnels indépendants (freelance). 
                Si vous êtes Menuisier, Électricien, Plombier ou similaire, vous êtes au bon endroit. 
                Si vous ne correspondez pas à ces critères, merci de ne pas remplir ce formulaire.
              </p>
            </div>
          </div>

          <form className="candidature-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="metier">
                Votre Métier <span className="required">*</span>
              </label>
              <select
                id="metier"
                name="metier"
                value={formData.metier}
                onChange={handleChange}
                required
              >
                <option value="">Choisir un métier...</option>
                {metiers.map((metier, index) => (
                  <option key={index} value={metier}>{metier}</option>
                ))}
              </select>
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
                placeholder="Ex: Kouadio Jean"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="nationalite">
                Nationalité <span className="required">*</span>
              </label>
              <input
                type="text"
                id="nationalite"
                name="nationalite"
                value={formData.nationalite}
                onChange={handleChange}
                placeholder="Ex: Ivoirienne"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="numero1">
                Numéro 1 (WhatsApp) <span className="required">*</span>
              </label>
              <input
                type="tel"
                id="numero1"
                name="numero1"
                value={formData.numero1}
                onChange={handleChange}
                placeholder="Ex: 2250574378201"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="numero2">
                Numéro 2 (Optionnel)
              </label>
              <input
                type="tel"
                id="numero2"
                name="numero2"
                value={formData.numero2}
                onChange={handleChange}
                placeholder="Ex: 2250574378201"
              />
            </div>

            <div className="form-group">
              <label htmlFor="adresse">
                Adresse <span className="required">*</span>
              </label>
              <textarea
                id="adresse"
                name="adresse"
                value={formData.adresse}
                onChange={handleChange}
                placeholder="Ex: Cocody Riviera, près du marché"
                rows="3"
                required
              />
            </div>

            <div className="form-info-cni">
              <strong>Photo Pièce d'Identité / CNI</strong>
              <p>La photo ne sera pas envoyée automatiquement. Veuillez la joindre dans la discussion WhatsApp.</p>
            </div>

            <button type="submit" className="btn-submit-candidature">
              <FaWhatsapp /> Envoyer ma Candidature
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CandidatureModal;