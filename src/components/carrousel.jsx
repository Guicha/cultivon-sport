import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { DodgeRoles } from '../assets/images/carrousel/dodgeroles.png';
import { Memory } from '../assets/images/carrousel/memory.png';
import { ReviSport } from '../assets/images/carrousel/revisport.png';

const ActivitiesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const activities = [
    {
      title: "REVI'SPORT",
      description: "Découverte du jeu réel de combat à base de confrontation, en intégrant le contexte de mission de chaque participant.",
      benefits: [
        { icon: "📊", text: "Individualisation dans le contenu" },
        { icon: "🏆", text: "Résultats maximisés" },
        { icon: "✅", text: "Engagement garanti" }
      ],
      image: {ReviSport}
    },
    {
      title: "DODGE RÔLES",
      description: "Le Dodge Roles est une modélisation ludique et éducative. Cette activité est attractive pour être focalisé et adapté à tous les âges et niveaux.",
      benefits: [
        { icon: "🎮", text: "Approche ludique" },
        { icon: "🧠", text: "Réflexion" },
        { icon: "🔍", text: "Analyse" },
        { icon: "🤝", text: "Esprit d'équipe" }
      ],
      image: {DodgeRoles}
    },
    {
      title: "MEMORY GÉANT",
      description: "Des événements sportifs sont élaborés pour motiver l'esprit d'équipe et promouvoir les principes de base de votre groupe. La combinaison des activités permet d'intégrer différents aspects du développement des participants engagés sur énormément d'aspects cognitif et mentaux.",
      benefits: [
        { icon: "⭐", text: "Expériences uniques" },
        { icon: "🙋", text: "Participation active" },
        { icon: "👥", text: "Interaction sociale" }
      ],
      image: {Memory}
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === activities.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? activities.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="w-full h-full bg-gray-200 relative overflow-hidden rounded-lg">
      {/* Carousel container */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {activities.map((activity, index) => (
          <div key={index} className="min-w-full flex-shrink-0 h-full">
            <div className="flex flex-col md:flex-row h-full">
              {/* Left content - gray part with text */}
              <div className="bg-gray-700 p-6 md:w-1/2 text-white">
                <h2 className="text-3xl font-bold mb-3 tracking-wider">{activity.title}</h2>
                <p className="text-sm mb-6 text-gray-300">{activity.description}</p>
                
                <div className="space-y-4">
                  {activity.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center">
                      <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-800">
                        <span>{benefit.icon}</span>
                      </div>
                      <span className="ml-3 text-white">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right content - image */}
              <div className="md:w-1/2 relative">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 text-white"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 text-white"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {activities.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ActivitiesCarousel;