import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShoppingCart, FaTimes, FaCheck } from 'react-icons/fa';
import { formatPrix } from '../../data/produitsData';
import './ProduitCard.css';

const ProduitCard = ({ produit, index, onAjouterPanier }) => {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [ajoutSuccess, setAjoutSuccess] = useState(false);

  const handleAjouterPanier = () => {
    onAjouterPanier(produit);
    setAjoutSuccess(true);
    setTimeout(() => setAjoutSuccess(false), 2000);
  };

  const prixAffiche = produit.promo ? produit.prixPromo : produit.prix;
  const economie = produit.promo ? produit.prix - produit.prixPromo : 0;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        viewport={{ once: true }}
        className="produit-card"
      >
        {/* Badges */}
        <div className="produit-badges">
          {produit.promo && <span className="badge badge-promo">-{Math.round((economie / produit.prix) * 100)}%</span>}
          {produit.nouveau && <span className="badge badge-nouveau">Nouveau</span>}
          {produit.stock < 10 && produit.stock > 0 && (
            <span className="badge badge-stock">Plus que {produit.stock}</span>
          )}
        </div>

        {/* Image */}
        <div className="produit-image" onClick={() => setDetailsOpen(true)}>
          <img src={produit.image} alt={produit.nom} />
        </div>

        {/* Infos */}
        <div className="produit-info">
          <h3 className="produit-nom">{produit.nom}</h3>
          <p className="produit-description">{produit.description}</p>

          <div className="produit-prix-container">
            {produit.promo ? (
              <>
                <span className="prix-promo">{formatPrix(produit.prixPromo)}</span>
                <span className="prix-barre">{formatPrix(produit.prix)}</span>
              </>
            ) : (
              <span className="prix-normal">{formatPrix(produit.prix)}</span>
            )}
          </div>

          <div className="produit-actions">
            <button className="btn-details" onClick={() => setDetailsOpen(true)}>
              Voir détails
            </button>
            <button 
              className={`btn-ajouter ${ajoutSuccess ? 'success' : ''}`}
              onClick={handleAjouterPanier}
              disabled={produit.stock === 0}
            >
              {ajoutSuccess ? (
                <>
                  <FaCheck /> Ajouté
                </>
              ) : produit.stock === 0 ? (
                'Rupture'
              ) : (
                <>
                  <FaShoppingCart /> Ajouter
                </>
              )}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Modal Détails */}
      <AnimatePresence>
        {detailsOpen && (
          <motion.div
            className="produit-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setDetailsOpen(false)}
          >
            <motion.div
              className="produit-modal"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setDetailsOpen(false)}>
                <FaTimes />
              </button>

              <div className="modal-content-produit">
                <div className="modal-image">
                  <img src={produit.image} alt={produit.nom} />
                  {produit.promo && (
                    <div className="modal-badge-promo">
                      -{Math.round((economie / produit.prix) * 100)}% 
                      <span>Économisez {formatPrix(economie)}</span>
                    </div>
                  )}
                </div>

                <div className="modal-details">
                  <h2>{produit.nom}</h2>
                  <p className="modal-description">{produit.description}</p>

                  <div className="modal-prix">
                    {produit.promo ? (
                      <>
                        <span className="prix-promo-large">{formatPrix(produit.prixPromo)}</span>
                        <span className="prix-barre-large">{formatPrix(produit.prix)}</span>
                      </>
                    ) : (
                      <span className="prix-normal-large">{formatPrix(produit.prix)}</span>
                    )}
                  </div>

                  <div className="modal-caracteristiques">
                    <h4>Caractéristiques</h4>
                    <ul>
                      {produit.caracteristiques.map((carac, idx) => (
                        <li key={idx}>
                          <FaCheck /> {carac}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal-stock">
                    {produit.stock > 10 ? (
                      <span className="stock-disponible">✓ En stock</span>
                    ) : produit.stock > 0 ? (
                      <span className="stock-limite">⚠ Plus que {produit.stock} disponible(s)</span>
                    ) : (
                      <span className="stock-rupture">✗ Rupture de stock</span>
                    )}
                  </div>

                  <button
                    className="btn-ajouter-large"
                    onClick={() => {
                      handleAjouterPanier();
                      setDetailsOpen(false);
                    }}
                    disabled={produit.stock === 0}
                  >
                    <FaShoppingCart /> Ajouter au panier
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProduitCard;