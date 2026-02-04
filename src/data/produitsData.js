export const categoriesProduits = [
  { id: 'all', name: 'Tous les produits' },
  { id: 'plomberie', name: 'Plomberie' },
  { id: 'electricite', name: 'Électricité' },
  { id: 'carrelage', name: 'Carrelage' },
  { id: 'peinture', name: 'Peinture' },
  { id: 'menuiserie', name: 'Menuiserie' },
  { id: 'vitrerie', name: 'Vitrerie' },
  { id: 'outillage', name: 'Outillage' }
];

export const produits = [
  // PLOMBERIE
  {
    id: 1,
    nom: 'Robinet Mitigeur Cuisine',
    categorie: 'plomberie',
    prix: 35000,
    prixPromo: null,
    image: '/images/boutique/robinet-cuisine.jpg',
    description: 'Robinet mitigeur moderne en laiton chromé pour évier de cuisine. Design élégant et durable.',
    caracteristiques: ['Laiton chromé', 'Rotation 360°', 'Garantie 2 ans', 'Installation facile'],
    stock: 15,
    promo: false,
    nouveau: true
  },
  {
    id: 2,
    nom: 'Chauffe-eau Électrique 50L',
    categorie: 'plomberie',
    prix: 85000,
    prixPromo: 75000,
    image: '/images/boutique/chauffe-eau.jpg',
    description: 'Chauffe-eau électrique blindé 50 litres, idéal pour 2-3 personnes. Économique et performant.',
    caracteristiques: ['Capacité 50L', '1500W', 'Protection anticorrosion', 'Thermostat réglable'],
    stock: 8,
    promo: true,
    nouveau: false
  },
  {
    id: 3,
    nom: 'Flexible Douche 1.5m',
    categorie: 'plomberie',
    prix: 8500,
    prixPromo: null,
    image: '/images/boutique/flexible-douche.jpg',
    description: 'Flexible de douche en acier inoxydable tressé, résistant et durable.',
    caracteristiques: ['Longueur 1.5m', 'Inox tressé', 'Anti-torsion', 'Raccords laiton'],
    stock: 30,
    promo: false,
    nouveau: false
  },

  // ÉLECTRICITÉ
  {
    id: 4,
    nom: 'Tableau Électrique 2 Rangées',
    categorie: 'electricite',
    prix: 45000,
    prixPromo: null,
    image: '/images/boutique/tableau-electrique.jpg',
    description: 'Tableau électrique pré-équipé 2 rangées 13 modules. Conforme aux normes NFC 15-100.',
    caracteristiques: ['2 rangées', '13 modules', 'Disjoncteur différentiel', 'Norme NFC'],
    stock: 12,
    promo: false,
    nouveau: true
  },
  {
    id: 5,
    nom: 'Câble Électrique 2.5mm² - 100m',
    categorie: 'electricite',
    prix: 28000,
    prixPromo: 25000,
    image: '/images/boutique/cable-electroque.jpg',
    description: 'Câble électrique H07V-U 2.5mm² rouge, bobine de 100 mètres pour prises.',
    caracteristiques: ['Section 2.5mm²', 'Bobine 100m', 'Cuivre', 'Pour prises 16A'],
    stock: 20,
    promo: true,
    nouveau: false
  },
  {
    id: 6,
    nom: 'Interrupteur Va-et-Vient Blanc',
    categorie: 'electricite',
    prix: 3500,
    prixPromo: null,
    image: '/images/boutique/interrupteur.jpg',
    description: 'Interrupteur va-et-vient blanc complet avec plaque de finition.',
    caracteristiques: ['10A 250V', 'Finition brillante', 'Complet avec plaque', 'Facile à poser'],
    stock: 50,
    promo: false,
    nouveau: false
  },

  // CARRELAGE
  {
    id: 7,
    nom: 'Carrelage Grès Cérame 60x60cm',
    categorie: 'carrelage',
    prix: 18000,
    prixPromo: 15000,
    image: '/images/boutique/carrelage-60x60.jpg',
    description: 'Carrelage grès cérame effet marbre 60x60cm. Vendu au m² (2 pièces).',
    caracteristiques: ['Format 60x60cm', 'Effet marbre', 'Antidérapant', 'Intérieur/Extérieur'],
    stock: 100,
    promo: true,
    nouveau: false
  },
  {
    id: 8,
    nom: 'Colle Carrelage 25kg',
    categorie: 'carrelage',
    prix: 12000,
    prixPromo: null,
    image: '/images/boutique/colle-carrelage.jpg',
    description: 'Mortier colle pour carrelage intérieur et extérieur. Sac de 25kg.',
    caracteristiques: ['25kg', 'Intérieur/Extérieur', 'Gris', 'Rendement 5m²'],
    stock: 40,
    promo: false,
    nouveau: false
  },
  {
    id: 9,
    nom: 'Joint Carrelage Blanc 5kg',
    categorie: 'carrelage',
    prix: 8500,
    prixPromo: null,
    image: '/images/boutique/joint-carrelage.jpg',
    description: 'Joint poudre pour carrelage couleur blanc. Sac de 5kg.',
    caracteristiques: ['5kg', 'Blanc pur', 'Hydrofuge', 'Joint 2-20mm'],
    stock: 35,
    promo: false,
    nouveau: false
  },

  // PEINTURE
  {
    id: 10,
    nom: 'Peinture Acrylique Blanche 10L',
    categorie: 'peinture',
    prix: 32000,
    prixPromo: 28000,
    image: '/images/boutique/peinture-blanche.jpg',
    description: 'Peinture acrylique mate blanche pour murs et plafonds. Bidon de 10 litres.',
    caracteristiques: ['10 litres', 'Mate', 'Lessivable', 'Rendement 60m²'],
    stock: 25,
    promo: true,
    nouveau: false
  },
  {
    id: 11,
    nom: 'Rouleau Peinture + Bac',
    categorie: 'peinture',
    prix: 6500,
    prixPromo: null,
    image: '/images/boutique/rouleau-peinture.jpg',
    description: 'Kit rouleau peinture professionnel avec bac et manche télescopique.',
    caracteristiques: ['Rouleau 25cm', 'Manche télescopique', 'Bac inclus', 'Anti-goutte'],
    stock: 45,
    promo: false,
    nouveau: true
  },
  {
    id: 12,
    nom: 'Peinture Glycéro Satinée 2.5L',
    categorie: 'peinture',
    prix: 15000,
    prixPromo: null,
    image: '/images/boutique/peinture-satinee.jpg',
    description: 'Peinture glycéro satinée multi-supports. Pot de 2.5 litres.',
    caracteristiques: ['2.5L', 'Satinée', 'Multi-supports', 'Haute résistance'],
    stock: 18,
    promo: false,
    nouveau: false
  },

  // MENUISERIE
  {
    id: 13,
    nom: 'Porte Intérieure Bois 83x204cm',
    categorie: 'menuiserie',
    prix: 125000,
    prixPromo: 110000,
    image: '/images/boutique/porte-bois.jpg',
    description: 'Porte intérieure en bois exotique, finition vernie. Dimension standard.',
    caracteristiques: ['83x204cm', 'Bois exotique', 'Vernie', 'Avec huisserie'],
    stock: 6,
    promo: true,
    nouveau: false
  },
  {
    id: 14,
    nom: 'Serrure à Mortaiser',
    categorie: 'menuiserie',
    prix: 18000,
    prixPromo: null,
    image: '/images/boutique/serrure.jpg',
    description: 'Serrure à mortaiser avec 3 clés, finition chromée, axe 40mm.',
    caracteristiques: ['3 clés', 'Axe 40mm', 'Chromée', 'Double tour'],
    stock: 22,
    promo: false,
    nouveau: false
  },
  {
    id: 15,
    nom: 'Contreplaqué 122x244cm - 15mm',
    categorie: 'menuiserie',
    prix: 28000,
    prixPromo: null,
    image: '/images/boutique/contreplaque.jpg',
    description: 'Panneau contreplaqué okoumé 122x244cm épaisseur 15mm.',
    caracteristiques: ['122x244cm', 'Épaisseur 15mm', 'Okoumé', 'Usage intérieur'],
    stock: 15,
    promo: false,
    nouveau: false
  },

  // VITRERIE
  {
    id: 16,
    nom: 'Vitre Simple 4mm - Sur Mesure',
    categorie: 'vitrerie',
    prix: 5000,
    prixPromo: null,
    image: '/images/boutique/vitre-simple.jpg',
    description: 'Vitre simple claire 4mm. Prix au m². Découpe sur mesure disponible.',
    caracteristiques: ['Épaisseur 4mm', 'Claire', 'Sur mesure', 'Prix/m²'],
    stock: 50,
    promo: false,
    nouveau: false
  },
  {
    id: 17,
    nom: 'Mastic Silicone Transparent',
    categorie: 'vitrerie',
    prix: 4500,
    prixPromo: null,
    image: '/images/boutique/mastic-silicone.jpg',
    description: 'Mastic silicone transparent pour joints d\'étanchéité. Cartouche 310ml.',
    caracteristiques: ['310ml', 'Transparent', 'Élastique', 'Fongicide'],
    stock: 60,
    promo: false,
    nouveau: false
  },

  // OUTILLAGE
  {
    id: 18,
    nom: 'Perceuse Visseuse Sans Fil 18V',
    categorie: 'outillage',
    prix: 95000,
    prixPromo: 85000,
    image: '/images/boutique/perceuse.jpg',
    description: 'Perceuse visseuse sans fil professionnelle 18V avec 2 batteries lithium.',
    caracteristiques: ['18V Li-ion', '2 batteries', 'Mandrin 13mm', 'Mallette incluse'],
    stock: 10,
    promo: true,
    nouveau: true
  },
  {
    id: 19,
    nom: 'Niveau à Bulle Magnétique 60cm',
    categorie: 'outillage',
    prix: 12000,
    prixPromo: null,
    image: '/images/boutique/niveau-bulle.jpg',
    description: 'Niveau à bulle professionnel 60cm avec aimants et fioles anti-choc.',
    caracteristiques: ['Longueur 60cm', 'Magnétique', '3 fioles', 'Précision 0.5mm/m'],
    stock: 25,
    promo: false,
    nouveau: false
  },
  {
    id: 20,
    nom: 'Meuleuse d\'Angle 125mm',
    categorie: 'outillage',
    prix: 45000,
    prixPromo: 40000,
    image: '/images/boutique/meuleuse.jpg',
    description: 'Meuleuse d\'angle 125mm 850W avec poignée auxiliaire et disques.',
    caracteristiques: ['125mm', '850W', '11000 tr/min', '3 disques inclus'],
    stock: 12,
    promo: true,
    nouveau: false
  }
];

export const formatPrix = (prix) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'XOF',
    minimumFractionDigits: 0
  }).format(prix);
};