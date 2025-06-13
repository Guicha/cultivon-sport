import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import DodgeRoles from "../assets/images/dodge_roles.png";
import ReviSport from "../assets/images/revi_sport.png";
import Memory from "../assets/images/memory.png";

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Dodge Rôles",
      paragraph: "Découvrez notre activité phare qui combine sport et stratégie. Une expérience unique qui rassemble les équipes autour du plaisir et de la compétition amicale.",
      images: [
        DodgeRoles,
        DodgeRoles,
        DodgeRoles,
        DodgeRoles,
        DodgeRoles,
        DodgeRoles,
        DodgeRoles

      ]
    },
    {
      id: 2,
      title: "Révi'sport",
      paragraph: "Réveillez vos souvenirs d'école avec notre concept innovant qui mélange nostalgie et activité physique. Une façon originale de faire du sport en équipe.",
      images: [
        ReviSport,
        ReviSport,
        ReviSport,
        ReviSport,
        ReviSport,
        ReviSport,
        ReviSport
      ]
    },
    {
      id: 3,
      title: "Memory Géant",
      paragraph: "Testez votre mémoire avec notre version géante du célèbre jeu. Une activité ludique qui stimule l'esprit d'équipe et la concentration.",
      images: [
        Memory,
        Memory,
        Memory,
        Memory,
        Memory,
        Memory,
        Memory
      ]
    },
  ];

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

  return (
    <div className="flex flex-col items-center justify-center space-y-10 px-50 py-20">
      <h1 className="text-5xl p-10 font-bold font-komila-axis text-center text-[#C99F17]">
        Quelques images de {slides[currentSlide].title}
      </h1>
      <p className="px-10 leading-10 text-center">
        {slides[currentSlide].paragraph}
      </p>
      
      {/* Main carousel container */}
      <div>
        <div className="grid grid-cols-4 grid-rows-3 gap-4 w-400 h-300 px-10">
          <div className="col-span-1 row-span-2">
            <img
              src={slides[currentSlide].images[0]}
              alt={`${slides[currentSlide].title} - Image 1`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <img
              src={slides[currentSlide].images[1]}
              alt={`${slides[currentSlide].title} - Image 2`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <img
              src={slides[currentSlide].images[2]}
              alt={`${slides[currentSlide].title} - Image 3`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <img
              src={slides[currentSlide].images[3]}
              alt={`${slides[currentSlide].title} - Image 4`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <img
              src={slides[currentSlide].images[4]}
              alt={`${slides[currentSlide].title} - Image 5`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="col-span-2 row-span-2">
            <img
              src={slides[currentSlide].images[5]}
              alt={`${slides[currentSlide].title} - Image 6`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="col-span-2 row-span-1">
            <img
              src={slides[currentSlide].images[6]}
              alt={`${slides[currentSlide].title} - Image 7`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        
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
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-[#C99F17] scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Aller à l'image ${index + 1}`}
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
