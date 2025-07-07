import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from "./Image";

const CharactersCarousel = ({ characters }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const charactersPerPage = 4;
  const totalPages = Math.ceil(characters.length / charactersPerPage);
  
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  
  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };
  
  // Get current characters
  const currentCharacters = characters.slice(
    currentPage * charactersPerPage,
    (currentPage + 1) * charactersPerPage
  );
  
  // Preload all images
  useEffect(() => {
    characters.forEach(character => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = character.image;
      document.head.appendChild(link);
    });
    // Optional: cleanup if needed
    return () => {
      // Remove only the links we added
      const links = document.querySelectorAll('link[rel="preload"][as="image"]');
      links.forEach(link => {
        if (characters.some(c => c.image === link.href)) {
          document.head.removeChild(link);
        }
      });
    };
  }, [characters]);
  
  return (
    <div className="w-full">
      {/* Characters grid */}
      <div className="flex flex-row items-center justify-between space-x-4">
        {currentCharacters.map((character, index) => (
          <div key={index} className="flex flex-col items-center justify-center font-poppins">
            <a href={character.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={character.image}
                alt={character.alt}
                width={300}
                height={300}
                className="transition-transform duration-300 hover:scale-105"
              />
            </a>
          </div>
        ))}
      </div>
      
      {/* Navigation arrows - centered below */}
      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={prevPage}
          className="flex items-center justify-center w-10 h-10 bg-white hover:bg-gray-300 rounded-full shadow-lg transition-all duration-200"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <button
          onClick={nextPage}
          className="flex items-center justify-center w-10 h-10 bg-white hover:bg-gray-300 rounded-full shadow-lg transition-all duration-200"
          aria-label="Next page"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default CharactersCarousel;
