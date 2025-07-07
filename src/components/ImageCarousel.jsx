import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Dodge1 from "../assets/images/dodge1.jpg";
import Dodge2 from "../assets/images/dodge2.jpg";
import Dodge3 from "../assets/images/dodge3.jpg";
import Dodge4 from "../assets/images/dodge4.jpg";

import ReviSport from "../assets/images/revi_sport.png";

import Memory from "../assets/images/memory1.jpg";
import Memory2 from "../assets/images/memory2.jpg"; 
import Memory3 from "../assets/images/memory3.jpg";

const slides = [
  {
    id: 1,
    title: "Dodge Rôles",
    paragraph:
      "Découvrez notre activité phare qui combine sport et stratégie. Une expérience unique qui rassemble les équipes autour du plaisir et de la compétition amicale.",
    images: [Dodge1, Dodge2, Dodge3, Dodge4],
    is_launched: true,
  },
  {
    id: 2,
    title: "Révi'sport",
    paragraph:
      "Laissez-vous inspirer par quelques-unes de nos réalisations : des décorations raffinées, des ambiances uniques, et des instants magiques immortalisés.",
    images: [ReviSport, ReviSport, ReviSport, ReviSport],
    is_launched: false,
  },
  {
    id: 3,
    title: "Memory's cube",
    paragraph:
      "Testez votre mémoire avec notre version géante du célèbre jeu. Une activité ludique qui stimule l'esprit d'équipe et la concentration.",
    images: [Memory, Memory2, Memory3, Memory],
    is_launched: true,
  },
];

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const currentSlideData = slides[currentSlide];

  return (
    <div className="flex flex-col items-center justify-center space-y-10 px-4 md:px-8 lg:px-16 xl:px-20 py-20 max-w-7xl mx-auto">
      <h1 className="text-5xl p-10 font-bold font-komila-axis text-center text-[#C99F17]">
        {currentSlideData.is_launched 
          ? `Quelques images de ${currentSlideData.title}`
          : currentSlideData.title
        }
      </h1>
      <p className="px-10 leading-10 text-center">
        {currentSlideData.paragraph}
      </p>

      {/* Main carousel container */}
      <div className="w-full">
        {currentSlideData.is_launched ? (
          /* Grid layout when activity is launched */
          <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[500px] max-w-5xl mx-auto">
            {/* Image 1 - Position [1,1] */}
            <img
              src={currentSlideData.images[0]}
              alt={`${currentSlideData.title} - Image 1`}
              className="w-full h-full object-cover rounded-lg"
              style={{ gridColumn: '1', gridRow: '1' }}
              loading="lazy"
            />
            
            {/* Image 2 - Position [2,1] */}
            <img
              src={currentSlideData.images[1]}
              alt={`${currentSlideData.title} - Image 2`}
              className="w-full h-full object-cover rounded-lg"
              style={{ gridColumn: '2', gridRow: '1' }}
              loading="lazy"
            />
            
            {/* Image 3 - Position [3,1-2] spans 2 rows */}
            <img
              src={currentSlideData.images[2]}
              alt={`${currentSlideData.title} - Image 3`}
              className="w-full h-full object-cover rounded-lg"
              style={{ gridColumn: '3', gridRow: '1 / 3' }}
              loading="lazy"
            />
            
            {/* Image 4 - Position [1-2,2] spans 2 columns */}
            <img
              src={currentSlideData.images[3]}
              alt={`${currentSlideData.title} - Image 4`}
              className="w-full h-full object-cover rounded-lg"
              style={{ gridColumn: '1 / 3', gridRow: '2' }}
              loading="lazy"
            />
          </div>
        ) : (
          /* Coming soon state when activity is not launched */
          <div className="relative max-w-5xl mx-auto h-[500px] rounded-lg overflow-hidden">
            <img
              src={currentSlideData.images[0]}
              alt={`${currentSlideData.title} - Coming Soon`}
              className="w-full h-full object-cover blur-sm"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-komila-axis">
                    À VENIR 
                </h2>
                <p className="text-lg md:text-xl text-gray-200">
                  Cette activité sera bientôt disponible
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation arrows at bottom center */}
        <div className="flex justify-center items-center space-x-4 mt-8">
          <button
            onClick={prevSlide}
            className="flex items-center justify-center w-12 h-12 bg-[#C99F17] hover:bg-[#B8901A] text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Image précédente"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex space-x-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-[#C99F17] scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Aller à ${slide.title}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="flex items-center justify-center w-12 h-12 bg-[#C99F17] hover:bg-[#B8901A] text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Image suivante"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;