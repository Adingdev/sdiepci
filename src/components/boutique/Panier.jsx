import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaTrash, FaWhatsapp, FaPlus, FaMinus } from 'react-icons/fa';
import { formatPrix } from '../../data/produitsData';
import './Panier.css';

const Panier = ({ isOpen, onClose, panier, setPanier }) => {
  const [infoClient, setInfoClient] = useState({
    nom: '',
    telephone: '',
    adresse: ''
  });

  // Modifier quantité
  const modifierQuantite = (id, action) => {
    setPanier(panier.map(item => {
      if (item.id === id) {
        const nouvelleQuantite = action === 'augmenter' 
          ? Math.min(item.quantite + 1, item.stock)
          : Math.max(item.quantite - 1, 1);
        return { ...item, quantite: nouvelleQuantite };
      }
      return item;
    }));
  };

  // Supprimer du panier
  const supprimerDuPanier = (id) => {
    setPanier(panier.filter(item => item.id !== id));
  };

  // Calculer total
  const calculerTotal = () => {
    return panier.reduce((total, item) => {
      const prix = item.promo ? item.prixPromo : item.prix;
      return total + (prix * item.quantite);
    }, 0);
  };

  // Vider panier
  const viderPanier = () => {
    if (window.confirm('Voulez-vous vraiment vider le panier ?')) {
      setPanier([]);
    }
  };

  // Commander via WhatsApp
  const commanderWhatsApp = () => {
    if (!infoClient.nom || !infoClient.telephone || !infoClient.adresse) {
      alert('Veuillez remplir toutes les informations de livraison');
      return;
    }

    if (panier.length === 0) {
      alert('Votre panier est vide');
      return;
    }

    // Créer le message de commande
    let message = `🛒 *NOUVELLE COMMANDE BOUTIQUE*\n\n`;
    message += `*Client :*\n`;
    message += `👤 Nom : ${infoClient.nom}\n`;
    message += `📞 Téléphone : ${infoClient.telephone}\n`;
    message += `📍 Adresse : ${infoClient.adresse}\n\n`;
    message += `*Produits commandés :*\n`;
    
    panier.forEach((item, index) => {
      const prixUnitaire = item.promo ? item.prixPromo : item.prix;
      message += `\n${index + 1}. ${item.nom}\n`;
      message += `   • Quantité : ${item.quantite}\n`;
      message += `   • Prix unitaire : ${formatPrix(prixUnitaire)}\n`;
      message += `   • Sous-total : ${formatPrix(prixUnitaire * item.quantite)}\n`;
    });
    
    message += `\n*TOTAL : ${formatPrix(calculerTotal())}*\n\n`;
    message += `---\n`;
    message += `Commande via le site SDIEP`;

    // Encoder et ouvrir WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '2250574378201'; // Votre numéro
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');

    // Réinitialiser
    setPanier([]);
    setInfoClient({ nom: '', telephone: '', adresse: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="panier-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="panier-sidebar"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="panier-header">
            <h2>
              Mon Panier
              {panier.length > 0 && (
                <span className="panier-count">({panier.length})</span>
              )}
            </h2>
            <button className="panier-close" onClick={onClose}>
              <FaTimes />
            </button>
          </div>

          {/* Contenu */}
          <div className="panier-content">
            {panier.length === 0 ? (
              <div className="panier-vide">
                <p>Votre panier est vide</p>
                <button className="btn-continuer" onClick={onClose}>
                  Continuer mes achats
                </button>
              </div>
            ) : (
              <>
                {/* Liste produits */}
                <div className="panier-items">
                  {panier.map(item => {
                    const prixUnitaire = item.promo ? item.prixPromo : item.prix;
                    return (
                      <div key={item.id} className="panier-item">
                        <img src={item.image} alt={item.nom} />
                        <div className="item-details">
                          <h4>{item.nom}</h4>
                          <div className="item-prix">
                            {formatPrix(prixUnitaire)}
                            {item.promo && <span className="item-promo">Promo</span>}
                          </div>
                          <div className="item-quantite">
                            <button
                              onClick={() => modifierQuantite(item.id, 'diminuer')}
                              disabled={item.quantite === 1}
                            >
                              <FaMinus />
                            </button>
                            <span>{item.quantite}</span>
                            <button
                              onClick={() => modifierQuantite(item.id, 'augmenter')}
                              disabled={item.quantite >= item.stock}
                            >
                              <FaPlus />
                            </button>
                          </div>
                          <div className="item-total">
                            {formatPrix(prixUnitaire * item.quantite)}
                          </div>
                        </div>
                        <button
                          className="item-supprimer"
                          onClick={() => supprimerDuPanier(item.id)}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    );
                  })}
                </div>

                {/* Informations client */}
                <div className="panier-info-client">
                  <h3>Informations de livraison</h3>
                  <input
                    type="text"
                    placeholder="Nom complet *"
                    value={infoClient.nom}
                    onChange={(e) => setInfoClient({ ...infoClient, nom: e.target.value })}
                  />
                  <input
                    type="tel"
                    placeholder="Téléphone WhatsApp *"
                    value={infoClient.telephone}
                    onChange={(e) => setInfoClient({ ...infoClient, telephone: e.target.value })}
                  />
                  <textarea
                    placeholder="Adresse de livraison *"
                    value={infoClient.adresse}
                    onChange={(e) => setInfoClient({ ...infoClient, adresse: e.target.value })}
                    rows="3"
                  />
                </div>

                {/* Total */}
                <div className="panier-total">
                  <div className="total-ligne">
                    <span>Sous-total</span>
                    <span>{formatPrix(calculerTotal())}</span>
                  </div>
                  <div className="total-ligne">
                    <span>Livraison</span>
                    <span>À calculer</span>
                  </div>
                  <div className="total-final">
                    <span>Total</span>
                    <span>{formatPrix(calculerTotal())}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="panier-actions">
                  <button className="btn-vider" onClick={viderPanier}>
                    <FaTrash /> Vider le panier
                  </button>
                  <button className="btn-commander" onClick={commanderWhatsApp}>
                    <FaWhatsapp /> Commander via WhatsApp
                  </button>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Panier;