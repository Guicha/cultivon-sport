import React from "react";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Fond from "../assets/images/fond.png"; // Import the image for the background

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    text: "Grâce à Cultivon'sport, mes enfants ont découvert des activités sportives passionnantes tout en développant leurs capacités cognitives. Ils sont plus concentrés et motivés à l'école. Une expérience enrichissante pour toute la famille !",
    author: "Alice Dupont",
    date: "12 janvier 2024",
    rating: 4.5,
  },
  {
    id: 2,
    text: "Un concept innovant qui casse la routine du sport classique ! J’ai participé à une session avec mon entreprise, et l’équilibre entre physique et réflexion a rendu l’expérience vraiment unique. Je recommande à 100 %.",
    author: "Mathieu Leblanc",
    date: "5 février 2024",
    rating: 5,
  },
  {
    id: 3,
    text: "Les ateliers sont bien pensés et adaptés à tous les âges. Mes élèves ont adoré les défis qui les poussent à bouger tout en développant leur mémoire et leur logique. Un super complément aux activités scolaires !",
    author: "Sophie Martin",
    date: "22 février 2024",
    rating: 4,
  },
  {
    id: 4,
    text: "J’ai testé Cultivon’sport avec mes amis, et on a tous été bluffés par la dynamique des jeux. C’est accessible mais stimulant, et surtout ultra ludique. On ne voit pas le temps passer ! Une belle découverte.",
    author: "Thomas Girard",
    date: "1er mars 2024",
    rating: 5,
  },
];

const Avis = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Generate stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`star-${i}`} className="text-yellow-400">
          ★
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half-star" className="text-yellow-400">
          ★
        </span>
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-star-${i}`} className="text-gray-300">
          ★
        </span>
      );
    }

    return stars;
  };
  return (
      <div
        className="relative w-full flex items-center justify-center rounded-lg overflow-hidden"
        style={{
          backgroundImage: `url(${Fond})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "420px", // ajuste la hauteur selon tes besoins
        }}
      >
        {/* Carte d'avis */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-3/5 mr-8 z-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            {testimonials[currentIndex].text}
          </p>
          <div className="flex items-center">
            <div>
              <p className="font-medium text-gray-900">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-sm text-gray-500">
                {testimonials[currentIndex].date}
              </p>
            </div>
            <div className="ml-auto">
              {renderStars(testimonials[currentIndex].rating)}
            </div>
          </div>
        </div>

        {/* Boutons de navigation */}
        <div className="absolute bottom-6 left-8 flex space-x-2 z-20">
          <button
            onClick={goToPrevious}
            className="bg-white rounded-full p-2 shadow-md hover:bg-gray-300 transition-colors"
          >
            <ChevronLeft size={20} color="#2C2C3A"/>
          </button>
          <button
            onClick={goToNext}
            className="bg-white rounded-full p-2 shadow-md hover:bg-gray-300 transition-colors"
          >
            <ChevronRight size={20} color="#2C2C3A" />
          </button>
        </div>
      </div>
  );
};
export default Avis;
