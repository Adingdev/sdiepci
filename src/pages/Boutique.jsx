import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaFilter, FaSearch, FaTimes } from 'react-icons/fa';
import { produits, categoriesProduits, formatPrix } from '../data/produitsData';
import ProduitCard from '../components/boutique/ProduitCard';
import Panier from '../components/boutique/Panier';
import './Boutique.css';

const Boutique = () => {
  const [categorieSelectionnee, setCategorieSelectionnee] = useState('all');
  const [recherche, setRecherche] = useState('');
  const [panierOpen, setPanierOpen] = useState(false);
  const [panier, setPanier] = useState([]);

  // Filtrer les produits
  const produitsFiltres = produits.filter(produit => {
    const matchCategorie = categorieSelectionnee === 'all' || produit.categorie === categorieSelectionnee;
    const matchRecherche = produit.nom.toLowerCase().includes(recherche.toLowerCase()) ||
                          produit.description.toLowerCase().includes(recherche.toLowerCase());
    return matchCategorie && matchRecherche;
  });

  // Ajouter au panier
  const ajouterAuPanier = (produit) => {
    const produitExistant = panier.find(item => item.id === produit.id);
    
    if (produitExistant) {
      setPanier(panier.map(item =>
        item.id === produit.id
          ? { ...item, quantite: item.quantite + 1 }
          : item
      ));
    } else {
      setPanier([...panier, { ...produit, quantite: 1 }]);
    }
  };

  // Nombre total d'articles dans le panier
  const totalArticles = panier.reduce((total, item) => total + item.quantite, 0);

  return (
    <>
      <div className="boutique-page">
        {/* Hero */}
        <div className="page-hero boutique-hero">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Boutique en Ligne</h1>
            <p>Matériaux et Produits de Qualité pour Vos Travaux</p>
          </motion.div>
        </div>

        {/* Barre de recherche et panier */}
        <section className="boutique-toolbar">
          <div className="container">
            <div className="toolbar-content">
              <div className="search-box">
                <FaSearch />
                <input
                  type="text"
                  placeholder="Rechercher un produit..."
                  value={recherche}
                  onChange={(e) => setRecherche(e.target.value)}
                />
                {recherche && (
                  <button className="clear-search" onClick={() => setRecherche('')}>
                    <FaTimes />
                  </button>
                )}
              </div>

              <button 
                className="btn-panier"
                onClick={() => setPanierOpen(true)}
              >
                <FaShoppingCart />
                <span>Panier</span>
                {totalArticles > 0 && (
                  <span className="panier-badge">{totalArticles}</span>
                )}
              </button>
            </div>
          </div>
        </section>

        {/* Filtres et Produits */}
        <section className="boutique-content">
          <div className="container">
            <div className="boutique-layout">
              {/* Sidebar Filtres */}
              <aside className="boutique-sidebar">
                <div className="filter-header">
                  <FaFilter />
                  <h3>Catégories</h3>
                </div>
                <div className="categories-list">
                  {categoriesProduits.map(categorie => (
                    <button
                      key={categorie.id}
                      className={`category-btn ${categorieSelectionnee === categorie.id ? 'active' : ''}`}
                      onClick={() => setCategorieSelectionnee(categorie.id)}
                    >
                      {categorie.name}
                      <span className="product-count">
                        {categorie.id === 'all' 
                          ? produits.length 
                          : produits.filter(p => p.categorie === categorie.id).length}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Infos livraison */}
                <div className="sidebar-info">
                  <h4>Livraison</h4>
                  <ul>
                    <li>✓ Livraison à Abidjan</li>
                    <li>✓ Retrait en magasin gratuit</li>
                    <li>✓ Paiement sécurisé</li>
                  </ul>
                </div>
              </aside>

              {/* Grille de Produits */}
              <div className="produits-main">
                <div className="produits-header">
                  <h2>
                    {categorieSelectionnee === 'all' 
                      ? 'Tous nos produits' 
                      : categoriesProduits.find(c => c.id === categorieSelectionnee)?.name}
                  </h2>
                  <p className="produits-count">
                    {produitsFiltres.length} produit{produitsFiltres.length > 1 ? 's' : ''}
                  </p>
                </div>

                {produitsFiltres.length === 0 ? (
                  <div className="no-products">
                    <p>Aucun produit trouvé</p>
                  </div>
                ) : (
                  <div className="produits-grid">
                    {produitsFiltres.map((produit, index) => (
                      <ProduitCard
                        key={produit.id}
                        produit={produit}
                        index={index}
                        onAjouterPanier={ajouterAuPanier}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Panier Sidebar */}
      <Panier
        isOpen={panierOpen}
        onClose={() => setPanierOpen(false)}
        panier={panier}
        setPanier={setPanier}
      />
    </>
  );
};

export default Boutique;