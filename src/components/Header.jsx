import { Link } from "react-router-dom";
import { useState } from "react";
import logoImage from "../assets/images/logo.png";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="absolute top-0 left-0 w-full z-50 text-white p-4">
            <div className="container mx-auto flex items-center justify-between max-w-7xl">
                <Link to="/">
                    <img src={logoImage} alt="Logo" className="h-10 w-10 sm:h-12 sm:w-12" loading="lazy" />
                </Link>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                    <Link to="/" className="hover:text-gray-300 font-medium transition-colors">Accueil</Link>
                    <Link to="/services" className="hover:text-gray-300 font-medium transition-colors">Nos Services</Link>
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
            <nav className={`md:hidden bg-gray/90 rounded-xl backdrop-blur-sm transition-all duration-300 ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="container mx-auto p-4 space-y-4">
                    <Link to="/" className="block hover:text-gray-300 font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>Accueil</Link>
                    <Link to="/services" className="block hover:text-gray-300 font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>Nos Services</Link>
                    <Link to="/about" className="block hover:text-gray-300 font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>Qui sommes nous ?</Link>
                    <Link to="/contact" className="block hover:text-gray-300 font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>Nous contacter</Link>
                </div>
            </nav>
        </header>
    );
}
export default Header;