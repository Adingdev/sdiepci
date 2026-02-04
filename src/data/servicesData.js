import { FaWrench, FaBorderAll, FaBolt, FaWindowMaximize, FaPaintBrush, FaDoorOpen } from 'react-icons/fa';

export const servicesData = [
  {
    id: 1,
    title: "Plomberie",
    slug: "plomberie",
    icon: FaWrench,
    description: "Installation et réparation de tous systèmes de plomberie pour vos projets résidentiels et commerciaux.",
    image: "/images/services/plomberie.jpg",
    features: [
      "Installation sanitaire complète",
      "Réparation de fuites",
      "Débouchage canalisations",
      "Plomberie industrielle",
      "Maintenance préventive"
    ],
    detailedDescription: "Nos plombiers certifiés interviennent pour tous vos besoins en plomberie. Que ce soit pour une installation neuve, une rénovation complète ou un dépannage d'urgence, nous garantissons un travail de qualité conforme aux normes en vigueur.",
    conseils: [
      "Vérifiez régulièrement vos robinets et tuyauteries pour détecter les fuites",
      "Entretenez votre chauffe-eau annuellement",
      "Ne jetez pas de produits corrosifs dans vos canalisations",
      "Installez des réducteurs de pression si nécessaire"
    ]
  },
  {
    id: 2,
    title: "Carrelage",
    slug: "carrelage",
    icon: FaBorderAll,
    description: "Pose professionnelle de carrelage pour sols et murs, intérieur et extérieur.",
    image: "/images/services/carrelage.jpg",
    features: [
      "Carrelage sol et mur",
      "Faïence salle de bain",
      "Terrasses et balcons",
      "Mosaïque décorative",
      "Rénovation carrelage"
    ],
    detailedDescription: "Spécialistes du carrelage depuis plus de 15 ans, nous réalisons vos projets de revêtement avec précision et esthétisme. Du choix des matériaux à la pose finale, nous vous accompagnons à chaque étape.",
    conseils: [
      "Choisissez un carrelage adapté à l'usage de chaque pièce",
      "Privilégiez les carreaux antidérapants pour les salles de bain",
      "Nettoyez les joints régulièrement pour éviter les moisissures",
      "Protégez votre carrelage avec un traitement hydrofuge en extérieur"
    ]
  },
  {
    id: 3,
    title: "Électricité",
    slug: "electricite",
    icon: FaBolt,
    description: "Installations électriques conformes aux normes, pour votre sécurité et votre confort.",
    image: "/images/services/electricite.jpg",
    features: [
      "Installation électrique complète",
      "Mise aux normes",
      "Dépannage 24/7",
      "Tableaux électriques",
      "Éclairage LED",
      "Domotique"
    ],
    detailedDescription: "Nos électriciens qualifiés assurent la sécurité de vos installations électriques. De la conception à la réalisation, nous respectons scrupuleusement les normes électriques en vigueur pour garantir votre sécurité.",
    conseils: [
      "Faites vérifier votre installation électrique tous les 10 ans",
      "Ne surchargez pas vos prises électriques",
      "Installez des disjoncteurs différentiels pour votre sécurité",
      "Optez pour l'éclairage LED pour réduire votre consommation"
    ]
  },
  {
    id: 4,
    title: "Vitrerie",
    slug: "vitrerie",
    icon: FaWindowMaximize,
    description: "Installation et réparation de vitrages pour fenêtres, portes et vérandas.",
    image: "/images/services/vitrerie.jpg",
    features: [
      "Pose de vitres",
      "Double vitrage",
      "Vitrines commerciales",
      "Miroirs sur mesure",
      "Réparation d'urgence",
      "Sécurisation vitrages"
    ],
    detailedDescription: "Experts en vitrerie, nous intervenons rapidement pour tous vos besoins en vitrage. Remplacement, réparation ou installation neuve, nous travaillons avec des matériaux de qualité pour votre confort et votre sécurité.",
    conseils: [
      "Optez pour du double vitrage pour une meilleure isolation",
      "Choisissez du verre securit dans les zones à risque",
      "Nettoyez vos vitres avec des produits non abrasifs",
      "Vérifiez l'étanchéité de vos fenêtres régulièrement"
    ]
  },
  {
    id: 5,
    title: "Peinture",
    slug: "peinture",
    icon: FaPaintBrush,
    description: "Travaux de peinture intérieure et extérieure avec finitions professionnelles.",
    image: "/images/services/peinture.jpg",
    features: [
      "Peinture intérieure",
      "Peinture extérieure",
      "Revêtements décoratifs",
      "Traitement anti-humidité",
      "Ravalement de façades",
      "Finitions haut de gamme"
    ],
    detailedDescription: "Nos peintres professionnels redonnent vie à vos espaces avec des finitions impeccables. Nous utilisons des peintures de qualité supérieure et respectueuses de l'environnement pour un résultat durable.",
    conseils: [
      "Préparez correctement les surfaces avant de peindre",
      "Utilisez une sous-couche adaptée au support",
      "Choisissez des peintures lessivables pour les pièces humides",
      "Aérez bien pendant et après les travaux de peinture"
    ]
  },
  {
    id: 6,
    title: "Menuiserie",
    slug: "menuiserie",
    icon: FaDoorOpen,
    description: "Fabrication et pose de menuiseries bois, PVC et aluminium sur mesure.",
    image: "/images/services/menuiserie.jpg",
    features: [
      "Portes et fenêtres",
      "Menuiserie sur mesure",
      "Agencement intérieur",
      "Placards et dressings",
      "Parquets et lambris",
      "Escaliers en bois"
    ],
    detailedDescription: "Artisans menuisiers passionnés, nous créons des pièces sur mesure alliant esthétique et fonctionnalité. Chaque réalisation est unique et adaptée à vos besoins spécifiques.",
    conseils: [
      "Entretenez régulièrement vos menuiseries en bois",
      "Huilez les gonds et serrures une fois par an",
      "Choisissez des essences de bois adaptées à chaque usage",
      "Protégez vos menuiseries extérieures avec un traitement adapté"
    ]
  }
];
