import { Link } from "react-router-dom";
import { useState } from "react";
import logoImage from "../assets/images/logo.png";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isActivitiesOpen, setIsActivitiesOpen] = useState(false);

    return (
        <header className="absolute top-0 left-0 w-full z-50 text-white p-4">
            <div className="container mx-auto flex items-center justify-between max-w-7xl">
                <Link to="/">
                    <img src={logoImage} alt="Logo" className="h-10 w-10 sm:h-12 sm:w-12" loading="lazy" />
                </Link>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                    <Link to="/" className="hover:text-gray-300 font-medium transition-colors">Accueil</Link>
                    
                    {/* Activities Dropdown */}
                    <div className="relative">
                        <button 
                            onClick={() => setIsActivitiesOpen(!isActivitiesOpen)}
                            className="hover:text-gray-300 font-medium transition-colors flex items-center"
                        >
                            Activités
                            <svg className={`ml-1 h-4 w-4 transition-transform ${isActivitiesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {isActivitiesOpen && (
                            <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-50">
                                <Link 
                                    to="/dodges-roles" 
                                    className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                                    onClick={() => setIsActivitiesOpen(false)}
                                >
                                    Dodges Rôles
                                </Link>
                                <Link 
                                    to="/revis-sport" 
                                    className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                                    onClick={() => setIsActivitiesOpen(false)}
                                >
                                    Révi'sport
                                </Link>
                                <Link 
                                    to="/memorys-cube" 
                                    className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                                    onClick={() => setIsActivitiesOpen(false)}
                                >
                                    Memory's cube
                                </Link>
                                <Link 
                                    to="/big-pen" 
                                    className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                                    onClick={() => setIsActivitiesOpen(false)}
                                >
                                    Big Pen
                                </Link>
                            </div>
                        )}
                    </div>
                    
                    <Link to="/about" className="hover:text-gray-300 font-medium transition-colors">Qui sommes nous ?</Link>
                    <Link to="/contact" className="hover:text-gray-300 font-medium transition-colors">Nous contacter</Link>
                </nav>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden flex flex-col space-y-1 p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Navigation */}
            <nav className={`md:hidden bg-gray/90 rounded-xl backdrop-blur-sm transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="container mx-auto p-4 space-y-4">
                    <Link to="/" className="block hover:text-gray-300 font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>Accueil</Link>
                    <Link to="/services" className="block hover:text-gray-300 font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>Nos Services</Link>
                    
                    {/* Mobile Activities Section */}
                    <div className="border-t border-gray-600 pt-4">
                        <p className="text-gray-400 text-sm mb-2">Activités</p>
                        <Link to="/dodges-roles" className="block pl-4 py-1 hover:text-gray-300 font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>Dodges Rôles</Link>
                        <Link to="/revis-sport" className="block pl-4 py-1 hover:text-gray-300 font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>Révi'sport</Link>
                        <Link to="/memorys-cube" className="block pl-4 py-1 hover:text-gray-300 font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>Memory's cube</Link>
                        <Link to="/big-pen" className="block pl-4 py-1 hover:text-gray-300 font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>Big Pen</Link>
                    </div>
                    
                    <Link to="/about" className="block hover:text-gray-300 font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>Qui sommes nous ?</Link>
                    <Link to="/contact" className="block hover:text-gray-300 font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>Nous contacter</Link>
                </div>
            </nav>
        </header>
    );
}
export default Header;