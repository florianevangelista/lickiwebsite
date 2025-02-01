import React, { useState } from 'react';
import { 
  Wrench, 
  Zap, 
  Thermometer, 
  Wind, 
  Grid2X2, 
  Droplets, 
  ShowerHead, 
  Search, 
  Menu, 
  ShoppingCart, 
  User, 
  Leaf, 
  Briefcase, 
  CreditCard, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin as LinkedIn, 
  Home, 
  Battery, 
  Shield, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight, 
  Image as LucideImage
} from 'lucide-react';

type MenuSetter = (show: boolean) => void;

declare global {
  namespace NodeJS {
    interface Timeout {}
  }
}

interface Props {}

interface PromoProduct {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
}

interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  avatar: string;
}

const promoProducts: PromoProduct[] = [
  {
    id: 1,
    name: "TRES MITIGEUR EVIER INDUSTRIEL",
    price: 294.00,
    oldPrice: 349.99,
    image: "https://images.unsplash.com/photo-1584652868574-0669f4292976?auto=format&fit=crop&q=80",
    category: "Sanitaire"
  },
  {
    id: 2,
    name: "TRES BASE MITIGEUR LAVABO",
    price: 56.27,
    oldPrice: 79.99,
    image: "https://images.unsplash.com/photo-1584652868824-d2269d1cf3c4?auto=format&fit=crop&q=80",
    category: "Sanitaire"
  },
  {
    id: 3,
    name: "TRES COLONNE DOUCHE COLORIS NOIR",
    price: 611.83,
    oldPrice: 749.99,
    image: "https://images.unsplash.com/photo-1584652868459-c5cc8e5c6c53?auto=format&fit=crop&q=80",
    category: "Sanitaire"
  },
  {
    id: 4,
    name: "POMPE À CHALEUR GOPAC FULL INVERTER MONO 12KW",
    price: 3007.41,
    oldPrice: 3499.99,
    image: "https://images.unsplash.com/photo-1631643590998-ac5e9f2403c9?auto=format&fit=crop&q=80",
    category: "Chauffage"
  }
];

const categories = [
  { icon: ShowerHead, name: 'Sanitaire', color: 'text-blue-500' },
  { icon: Wrench, name: 'Outillage', color: 'text-red-500' },
  { icon: Zap, name: 'Électricité', color: 'text-yellow-500' },
  { icon: Thermometer, name: 'Chauffage', color: 'text-green-500' },
  { icon: Wind, name: 'HVAC', color: 'text-blue-500' },
  { icon: Grid2X2, name: 'Carrelages', color: 'text-red-500' },
  { icon: Droplets, name: 'Traitement d\'eau', color: 'text-yellow-500' },
];

const sanitaireSubmenu = {
  "Salle de bain": [
    "Baignoire",
    "Bidet",
    "Douche",
    "Colonne de douche",
    "Barre douche",
    "Tub de douche",
    "Lavabo",
    "Accessoire",
    "Vasque",
  ],
  "WC": [
    "WC",
    "Broyeur",
    "Lunettes WC",
    "Accessoires WC",
    "WC suspendu",
    "Wc à poser",
    "Urinoir",
    "Caniveau",
  ],
  "Cuisine": ["Cuisine"],
  "Plomberie": [
    "Matériel d'installation sanitaire",
    "Pompe hydrophore",
    "Production eau chaude",
    "Quincaillerie",
  ],
  "Robinetterie": [
    "Robinetterie",
    "Mitigeur",
    "Mélangeur",
    "Accessoire",
    "Douchette",
    "Thermostat",
    "Flexible",
  ],
};

const outillageSubmenu = {
  "Outillage à main": [
    "Appareil de mesure",
    "Clé",
    "Mâchoire",
    "Pince",
    "Scie",
    "Accessoires pour scies"
  ],
  "Équipement": [
    "Machine et batterie",
    "Outillage pour Jardins",
    "Outils",
  ],
  "Sécurité et Organisation": [
    "Pictogramme",
    "Vêtements de travail",
    "Systèmes de rangement",
    "Système de sécurité"
  ]
};

const electriciteSubmenu = {
  "Éclairage": [
    "Ampoule",
    "LED alimentations",
    "Transformateur électronique",
    "Eclairage décoratif",
    "Unité d'éclairage LED",
    "Eclairage de secours"
  ],
  "Installation": [
    "Boites d'encastrement & accessoire",
    "Console et fixation",
    "Matériel d'installation",
    "Chemin de câble pvc + accessoires",
    "Coffret",
    "Cable",
    "Goulotte",
    "Canalisation murale pvc + accessoires",
    "Boîte apparent",
    "Armoires et coffrets"
  ],
  "Commandes et Contrôles": [
    "Commande à distance",
    "Prises",
    "Matériel à encastrer",
    "Plaque centrale",
    "Mosaic",
    "Disjoncteur",
    "Interrupteur",
    "Commutateur",
    "Adaptateur",
    "Bouton poussoir"
  ],
  "Distribution et Sécurité": [
    "Distribution de courant",
    "Control commande",
    "Voyant lumineux",
    "Sectionneurs ouverts/fermés",
    "Variateur modulaire",
    "Bloc de contact",
    "Plaque de recouvrement",
    "Détecteur de mouvement"
  ],
  "Divers": [
    "Electronique",
    "Accessoires"
  ]
};

const chauffageSubmenu = {
  "Chaudières": [
    "Chaudière mazout à condensation",
    "Chaudière murale gaz",
    "Chaudière sol gaz",
    "Chaudière sol mazout",
    "Brûleur",
    "Accessoires chaudière",
    "Pièces détachées chaudière",
    "Raccordement chaudière",
    "Evacuation gaz brûlés"
  ],
  "Radiateurs et Sèche-serviettes": [
    "Radiateur",
    "Radiateur plinthe Korado",
    "Accessoires pour radiateur",
    "Sèche serviette",
    "Sèche serviette Zehnder",
    "Robinetterie de radiateur"
  ],
  "Chauffage au Sol": [
    "Chauffage par le sol",
    "Collecteur",
    "Circulateur"
  ],
  "Production de Chaleur": [
    "Pompe à chaleur",
    "Production eau chaude",
    "Réservoir d'eau chaude",
    "Convecteur",
    "Fumisterie"
  ],
  "Installation et Stockage": [
    "Matériel d'installation chauffage",
    "Citerne",
    "Régulation - Thermostat d'ambiance"
  ]
};

const featuredProducts = [
  {
    id: 1,
    name: 'Premium Shower Head',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&q=80',
    category: 'Sanitaire'
  },
  {
    id: 2,
    name: 'Professional Tool Set',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1581147036324-c1a98e404e79?auto=format&fit=crop&q=80',
    category: 'Outillage'
  },
  {
    id: 3,
    name: 'Smart Thermostat',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1567925086590-62ab3b6cbbc5?auto=format&fit=crop&q=80',
    category: 'Chauffage'
  },
];

const catalogues = [
  {
    id: 1,
    image: '/catalogues/catalogue-douche.jpg',
    title: 'Catalogue Douche',
    category: 'Sanitaire'
  },
  {
    id: 2,
    image: '/catalogues/catalogue-selection.jpg',
    title: 'Catalogue Sélection 2024',
    category: 'Général'
  },
  {
    id: 3,
    image: '/catalogues/catalogue-vert.jpg',
    title: 'Catalogue Vert',
    category: 'Écologie'
  },
  {
    id: 4,
    image: '/catalogues/catalogue-solar.jpg',
    title: 'Catalogue Solar',
    category: 'Énergie'
  }
];

const reviews: Review[] = [
  {
    id: 1,
    author: "Timothy Garrett",
    rating: 5,
    comment: "Michelin experience! Chef Tom and the team doing an incredible job! The service was outstanding!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 2,
    author: "Joe Lawson",
    rating: 5,
    comment: "Modern European cuisine with a light and zesty touch to the traditional. Worth a stop for special celebrations!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 3,
    author: "Lori Coleman",
    rating: 5,
    comment: "Incredible food with an fantastic service team, everyone on the service team moved as one as the dishes and drinks are being served.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

function App({}: Props) {
  const [cartCount] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [showSanitaireMenu, setShowSanitaireMenu] = useState(false);
  const [showOutillageMenu, setShowOutillageMenu] = useState(false);
  const [showElectriciteMenu, setShowElectriciteMenu] = useState(false);
  const [showChauffageMenu, setShowChauffageMenu] = useState(false);
  const [showHvacMenu, setShowHvacMenu] = useState(false);
  const [showTraitementEauxMenu, setShowTraitementEauxMenu] = useState(false);
  let timeoutId: NodeJS.Timeout;

  const handleMouseEnter = (menuSetter: MenuSetter) => {
    if (timeoutId) clearTimeout(timeoutId);
    setShowSanitaireMenu(false);
    setShowOutillageMenu(false);
    setShowElectriciteMenu(false);
    setShowChauffageMenu(false);
    setShowHvacMenu(false);
    setShowTraitementEauxMenu(false);
    menuSetter(true);
  };

  const handleMouseLeave = (menuSetter: MenuSetter) => {
    timeoutId = setTimeout(() => {
      menuSetter(false);
    }, 100);
  };

  const handleNavMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setShowSanitaireMenu(false);
      setShowOutillageMenu(false);
      setShowElectriciteMenu(false);
      setShowChauffageMenu(false);
      setShowHvacMenu(false);
      setShowTraitementEauxMenu(false);
    }, 100);
  };

  return (
    <div className="min-h-screen">
      {/* Menu flottant unique */}
      <header className="fixed w-full top-4 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <nav 
            className="bg-gray-900/90 backdrop-blur-sm rounded-full px-6 py-4"
            onMouseLeave={handleNavMouseLeave}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-12">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                  <ShowerHead className="h-8 w-8 text-[#f2bb13]" />
                  <span className="text-2xl font-bold text-white">Licki Sanit</span>
                </div>
                
                {/* Navigation Links */}
                <div className="hidden md:flex items-center space-x-8">
                  {/* Menu Sanitaire avec sous-menu */}
                  <div 
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter(setShowSanitaireMenu)}
                    onMouseLeave={() => handleMouseLeave(setShowSanitaireMenu)}
                  >
                    <button 
                      className="text-white/90 hover:text-white transition-colors flex items-center space-x-1"
                    >
                      <span>Sanitaire</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>

                    {/* Sous-menu Sanitaire */}
                    {showSanitaireMenu && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 px-4"
                        onMouseEnter={() => handleMouseEnter(setShowSanitaireMenu)}
                        onMouseLeave={() => handleMouseLeave(setShowSanitaireMenu)}
                      >
                        {/* Ajout d'une zone invisible pour combler l'espace entre le bouton et le menu */}
                        <div className="absolute h-2 w-full bg-transparent -top-2 left-0" />
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Installation</h3>
                            <ul className="space-y-1">
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Baignoire</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Bidet</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Douche</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Colonne de douche</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Barre douche</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Tub de douche</a></li>
                            </ul>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-2">WC</h3>
                            <ul className="space-y-1">
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">WC suspendu</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">WC à poser</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Broyeur</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Lunettes WC</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Accessoires WC</a></li>
                            </ul>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Lavabo & Cuisine</h3>
                            <ul className="space-y-1">
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Lavabo</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Vasque</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Cuisine</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Accessoires</a></li>
                            </ul>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Robinetterie</h3>
                            <ul className="space-y-1">
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Mitigeur</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Mélangeur</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Douchette</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Thermostat</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Flexible</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Menu Outillage avec sous-menu */}
                  <div 
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter(setShowOutillageMenu)}
                    onMouseLeave={() => handleMouseLeave(setShowOutillageMenu)}
                  >
                    <button className="text-white/90 hover:text-white transition-colors flex items-center space-x-1">
                      <span>Outillage</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>

                    {showOutillageMenu && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 px-4"
                        onMouseEnter={() => handleMouseEnter(setShowOutillageMenu)}
                        onMouseLeave={() => handleMouseLeave(setShowOutillageMenu)}
                      >
                        <div className="absolute h-2 w-full bg-transparent -top-2 left-0" />
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Outillage à main</h3>
                            <ul className="space-y-1">
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Appareil de mesure</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Clé</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Mâchoire</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Pince</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Scie</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Accessoires pour scies</a></li>
                            </ul>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Équipement</h3>
                            <ul className="space-y-1">
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Machine et batterie</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Outillage pour Jardins</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Outils</a></li>
                            </ul>

                            <h3 className="font-semibold text-gray-900 mt-4 mb-2">Sécurité</h3>
                            <ul className="space-y-1">
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Pictogramme</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Vêtements de travail</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Systèmes de rangement</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Système de sécurité</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Menu Électricité avec sous-menu */}
                  <div 
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter(setShowElectriciteMenu)}
                    onMouseLeave={() => handleMouseLeave(setShowElectriciteMenu)}
                  >
                    <button className="text-white/90 hover:text-white transition-colors flex items-center space-x-1">
                      <span>Électricité</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>

                    {showElectriciteMenu && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-lg shadow-lg py-2 px-4"
                        onMouseEnter={() => handleMouseEnter(setShowElectriciteMenu)}
                        onMouseLeave={() => handleMouseLeave(setShowElectriciteMenu)}
                      >
                        <div className="absolute h-2 w-full bg-transparent -top-2 left-0" />
                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Éclairage</h3>
                            <ul className="space-y-1">
                              {electriciteSubmenu["Éclairage"].map((item) => (
                                <li key={item}>
                                  <a href="#" className="text-gray-600 hover:text-[#4585f4] block">{item}</a>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Installation</h3>
                            <ul className="space-y-1">
                              {electriciteSubmenu["Installation"].map((item) => (
                                <li key={item}>
                                  <a href="#" className="text-gray-600 hover:text-[#4585f4] block">{item}</a>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Commandes et Contrôles</h3>
                            <ul className="space-y-1">
                              {electriciteSubmenu["Commandes et Contrôles"].map((item) => (
                                <li key={item}>
                                  <a href="#" className="text-gray-600 hover:text-[#4585f4] block">{item}</a>
                                </li>
                              ))}
                            </ul>

                            <h3 className="font-semibold text-gray-900 mt-4 mb-2">Distribution et Sécurité</h3>
                            <ul className="space-y-1">
                              {electriciteSubmenu["Distribution et Sécurité"].map((item) => (
                                <li key={item}>
                                  <a href="#" className="text-gray-600 hover:text-[#4585f4] block">{item}</a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Menu Chauffage avec sous-menu */}
                  <div 
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter(setShowChauffageMenu)}
                    onMouseLeave={() => handleMouseLeave(setShowChauffageMenu)}
                  >
                    <button className="text-white/90 hover:text-white transition-colors flex items-center space-x-1">
                      <span>Chauffage</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>

                    {showChauffageMenu && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-lg shadow-lg py-2 px-4"
                        onMouseEnter={() => handleMouseEnter(setShowChauffageMenu)}
                        onMouseLeave={() => handleMouseLeave(setShowChauffageMenu)}
                      >
                        <div className="absolute h-2 w-full bg-transparent -top-2 left-0" />
                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Chaudières</h3>
                            <ul className="space-y-1">
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Chaudière mazout à condensation</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Chaudière murale gaz</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Chaudière sol gaz</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Chaudière sol mazout</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Brûleur</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Accessoires chaudière</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Pièces détachées chaudière</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Raccordement chaudière</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Evacuation gaz brûlés</a></li>
                            </ul>
                          </div>

                          <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Radiateurs et Chauffage</h3>
                            <ul className="space-y-1">
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Radiateur</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Radiateur plinthe Korado</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Accessoires pour radiateur</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Sèche serviette</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Sèche serviette Zehnder</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Robinetterie de radiateur</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Chauffage par le sol</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Convecteur</a></li>
                            </ul>
                          </div>

                          <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Installation et Production</h3>
                            <ul className="space-y-1">
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Matériel d'installation chauffage</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Pompe à chaleur</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Production eau chaude</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Réservoir d'eau chaude</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Collecteur</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Circulateur</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Citerne</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Fumisterie</a></li>
                              <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Régulation - Thermostat d'ambiance</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Menu HVAC avec sous-menu */}
                  <div 
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter(setShowHvacMenu)}
                    onMouseLeave={() => handleMouseLeave(setShowHvacMenu)}
                  >
                    <button className="text-white/90 hover:text-white transition-colors flex items-center space-x-1">
                      <span>HVAC</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>

                    {showHvacMenu && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 px-4"
                        onMouseEnter={() => handleMouseEnter(setShowHvacMenu)}
                        onMouseLeave={() => handleMouseLeave(setShowHvacMenu)}
                      >
                        <div className="absolute h-2 w-full bg-transparent -top-2 left-0" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Ventilation</h3>
                          <ul className="space-y-1">
                            <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Accessoire ventilation</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Aérateur ventilation</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Grille de ventilation</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Pièces de raccordement</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Unité de ventilation</a></li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                  <a href="#" className="text-white/90 hover:text-white transition-colors">Carrelages</a>
                  {/* Menu Traitement d'eau avec sous-menu */}
                  <div 
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter(setShowTraitementEauxMenu)}
                    onMouseLeave={() => handleMouseLeave(setShowTraitementEauxMenu)}
                  >
                    <button className="text-white/90 hover:text-white transition-colors flex items-center space-x-1">
                      <span>Traitement d'eau</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>

                    {showTraitementEauxMenu && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 px-4"
                        onMouseEnter={() => handleMouseEnter(setShowTraitementEauxMenu)}
                        onMouseLeave={() => handleMouseLeave(setShowTraitementEauxMenu)}
                      >
                        <div className="absolute h-2 w-full bg-transparent -top-2 left-0" />
                        <div>
                          <ul className="space-y-1">
                            <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Adoucisseur</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#4585f4] block">Filtre</a></li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Ajout d'un espace pour compenser le menu fixe */}
      <div className="h-24"></div>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#4585f4]/10 to-[#4585f4]/20 p-8">
          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-7xl font-light tracking-wider text-[#4585f4]">
                  SOLAR
                  <br />
                  PANEL
                </h1>
                <h2 className="text-7xl font-light tracking-wider text-right text-[#e74335]">
                  PURE
                  <br />
                  SUN
                </h2>
              </div>
              <div className="flex items-center space-x-4">
                <button className="bg-[#e74335] hover:bg-[#e74335]/90 text-white px-6 py-3 rounded-full flex items-center space-x-2">
                  <span>Voir plus</span>
                  <span>→</span>
                </button>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Reviews</span>
                  <div className="flex items-center">
                    <span>⭐</span>
                    <span className="font-medium">4.9</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-[#f2bb13] rounded-lg p-8 h-full">
                <Home className="w-full h-full text-white" strokeWidth={1.5} />
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-lg font-medium">92%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-3 gap-6 mt-8">
          <div className="bg-[#4585f4] text-white p-6 rounded-xl">
            <div className="space-y-4">
              <h3 className="text-4xl font-bold">A propos</h3>
              <p className="text-xl">Waterproof</p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <Shield className="w-24 h-24 mx-auto text-gray-700" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          <div className="bg-[#e74335] text-white p-6 rounded-xl">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm">Rated #1</span>
                <div className="bg-white/20 rounded-full px-2 py-1">
                  <span>+8k</span>
                </div>
              </div>
              <h3 className="text-2xl">
                Great selection of
                <span className="text-yellow-400"> solar panels </span>
                in SunSolar company
              </h3>
              <p className="text-gray-400">Trusted by 50,000+ people</p>
              <Home className="w-16 h-16 text-yellow-400" strokeWidth={1.5} />
            </div>
          </div>

          <div className="bg-[#f2bb13] text-white p-6 rounded-xl">
            <div className="space-y-4">
              <h3 className="text-2xl font-medium">Inverter for solar panels</h3>
              <p className="text-gray-600">Portable unit with large storage capacity</p>
              <div className="bg-gray-200 p-4 rounded-lg">
                <Battery className="w-24 h-24 mx-auto text-gray-700" strokeWidth={1.5} />
              </div>
              <div className="flex justify-between items-center">
                <span>24solar.com</span>
                <span>→</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Section Promotions */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Promotions du moment</h2>
            <div className="flex space-x-2">
              <button 
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Précédent"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>
              <button 
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Suivant"
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {promoProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-2 right-2 bg-[#e74335] text-white px-2 py-1 rounded-full text-sm font-semibold">
                    -{Math.round(((product.oldPrice! - product.price) / product.oldPrice!) * 100)}%
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900 h-12 line-clamp-2">{product.name}</h3>
                  <p className="text-gray-500 text-xs mb-2">{product.category}</p>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-lg font-bold text-[#e74335]">{product.price.toFixed(2)}€</span>
                    <span className="text-sm text-gray-500 line-through">{product.oldPrice?.toFixed(2)}€</span>
                  </div>
                  <button className="mt-4 w-full bg-[#4585f4] hover:bg-[#4585f4]/90 text-white px-4 py-2 rounded-lg transition-colors text-sm">
                    Ajouter au panier
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Notre Sélection */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Notre sélection</h2>
            <div className="flex space-x-2">
              <button 
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Précédent"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>
              <button 
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Suivant"
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-2 right-2 bg-[#4585f4] text-white px-2 py-1 rounded-full text-sm font-semibold">
                    Sélection
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900 h-12 line-clamp-2">{product.name}</h3>
                  <p className="text-gray-500 text-xs mb-2">{product.category}</p>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-lg font-bold text-[#4585f4]">{product.price.toFixed(2)}€</span>
                  </div>
                  <button className="mt-4 w-full bg-[#4585f4] hover:bg-[#4585f4]/90 text-white px-4 py-2 rounded-lg transition-colors text-sm">
                    Ajouter au panier
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Reviews */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Avis clients</h2>
              <p className="mt-2 text-gray-600">Ce que nos clients disent de nous</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                {reviews.slice(0, 3).map((review) => (
                  <img
                    key={review.id}
                    src={review.avatar}
                    alt=""
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div className="ml-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600">+2000 avis clients</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div 
                key={review.id}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">{review.author}</h3>
                    <div className="flex items-center mt-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 line-clamp-3">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Catalogues */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Découvrez nos catalogues</h2>
          <div className="flex space-x-2">
            <button 
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Précédent"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button 
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Suivant"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {catalogues.map((catalogue) => (
            <div 
              key={catalogue.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[3/4] relative">
                <img
                  src={catalogue.image}
                  alt={catalogue.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-semibold text-white">{catalogue.title}</h3>
                  <p className="text-sm text-white/80">{catalogue.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Professional Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Avantages pour les Professionnels
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Briefcase className="h-6 w-6 text-blue-500 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Compte Professionnel</h3>
                    <p className="text-gray-600">Prix spéciaux et conditions de paiement étendues</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CreditCard className="h-6 w-6 text-blue-500 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Paiement Flexible</h3>
                    <p className="text-gray-600">Multiples options de paiement et lignes de crédit</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Ecological Commitment */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Notre Engagement Écologique
              </h2>
              <div className="flex items-start">
                <Leaf className="h-6 w-6 text-green-500 mt-1 mr-3" />
                <div>
                  <p className="text-gray-600">
                    Nous nous engageons à réduire notre impact environnemental grâce à des
                    pratiques durables, des produits écologiques et un approvisionnement responsable.
                  </p>
                  <a href="#" className="text-blue-600 hover:text-blue-700 mt-4 inline-block">
                    En savoir plus sur nos initiatives →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer avec le menu de pied de page en jaune */}
      <footer className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Logo et Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <ShowerHead className="h-8 w-8 text-[#f2bb13]" />
                <span className="text-2xl font-bold text-white">Licki Sanit</span>
              </div>
              <p className="text-gray-400">
                Votre partenaire en solutions sanitaires et chauffage depuis 1985.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Liens Rapides</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#f2bb13] transition-colors">Sanitaire</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#f2bb13] transition-colors">Outillage</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#f2bb13] transition-colors">Électricité</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#f2bb13] transition-colors">Chauffage</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contactez-nous</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-gray-400">
                  <Mail className="h-5 w-5" />
                  <span>info@lickisanit.be</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-400">
                  <Phone className="h-5 w-5" />
                  <span>+32 (0) 123 456 789</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-400">
                  <MapPin className="h-5 w-5" />
                  <span>123 Rue du Commerce, BE</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-white font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Restez informé de nos derniers produits et offres.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Entrez votre email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg flex-grow"
                />
                <button className="bg-[#f2bb13] hover:bg-[#f2bb13]/90 text-white px-4 py-2 rounded-lg transition-colors">
                  S'abonner
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Licki Sanit. Tous droits réservés.
              </p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-[#f2bb13] transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#f2bb13] transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#f2bb13] transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#f2bb13] transition-colors">
                  <LinkedIn className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;