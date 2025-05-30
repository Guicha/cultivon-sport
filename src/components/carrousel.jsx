import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Dodgesroles from "../assets/images/carrousel/dodgeroles.png";
import Memory from '../assets/images/carrousel/memory.png';
import Revisport from '../assets/images/carrousel/revisport.png';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: "REVI'SPORT",
      description: "Un mode de jeu Famille permet à tous de se confronter, en adaptant le contenu au niveau de chaque participant.",
      benefits: [
        { icon: "📊", text: "Individualisation dans le contenu" },
        { icon: "🏆", text: "Résultats maximisés" },
        { icon: "✅", text: "Engagement garanti" }
      ],
      image: Revisport
    },
    {
      title: "DODGE RÔLES",
      description: "Le Dodge Rôles offre une introduction ludique et éducative. Cette activité est structurée pour être inclusif et adapté à tous les âges et niveaux de compétence.",
      benefits: [
        { icon: "🎮", text: "Approche ludique" },
        { icon: "🧠", text: "Réflexion" },
        { icon: "🔍", text: "Analyse" },
        { icon: "🤝", text: "Esprit d'équipe" }
      ],
      image: Dodgesroles
    },
    {
      title: "MEMORY GÉANT",
      description: "Nos Événements sportifs sont idéaux pour renforcer l'esprit d'équipe et promouvoir le bien-être au sein de votre groupe. En combinant des activités physiques et cognitives, nous créons des expériences mémorables et engageantes qui encouragent la participation et l'interaction.",
      benefits: [
        { icon: "⭐", text: "Expériences uniques" },
        { icon: "🙋", text: "Participation active" },
        { icon: "👥", text: "Interaction sociale" }
      ],
      image: Memory
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="mx-auto p-8 relative">
      <div className="flex items-center gap-12 min-h-[500px]">
        {/* Contenu à gauche */}
        <div className="flex-1 space-y-6">
          <div className="space-y-3">
            <h1 className="text-4xl font-komila-axis transition-all duration-500 opacity-70 text-white">
              {slides[currentIndex].title}
            </h1>
            <p className="text-lg text-white transition-all duration-500 leading-relaxed">
              {slides[currentIndex].description}
            </p>
          </div>

          {/* Liste avec icônes */}
          <ul className="space-y-4 transition-all duration-500">
            {slides[currentIndex].benefits.map((benefit, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg">{benefit.icon}</span>
                </div>
                <span className="text-base text-white">{benefit.text}</span>
              </li>
            ))}
          </ul>

        </div>

        {/* Image à droite */}
        <div className="flex-1 relative">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className="w-full h-[400px] object-cover transition-all duration-700 ease-in-out transform hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
      
      {/* Navigation arrows positioned at the bottom left of the carousel */}
      <div className="absolute bottom-6 left-6 flex gap-4 z-10">
        <button
          onClick={prevSlide}
          className="flex items-center justify-center w-10 h-10 bg-white hover:bg-gray-300 rounded-full shadow-lg transition-all duration-200"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <button
          onClick={nextSlide}
          className="flex items-center justify-center w-10 h-10 bg-white hover:bg-gray-300 rounded-full shadow-lg transition-all duration-200"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;