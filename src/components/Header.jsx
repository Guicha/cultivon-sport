import { Link } from "react-router-dom";
import logoImage from "../assets/images/logo.png";

const Header = () => {
    return (
        <header className="absolute top-0 left-0 w-full z-10 text-white p-4">
            <div className="container mx-auto flex items-center justify-between">
                <img src={logoImage} alt="Logo" className="h-12 w-12" />
                <nav className="space-x-6">
                    <Link to="/" className="hover:text-gray-300 font-medium">Accueil</Link>
                    <Link to="/services" className="hover:text-gray-300 font-medium">Nos Services</Link>
                    <Link to="/about" className="hover:text-gray-300 font-medium">Qui sommes nous ?</Link>
                    <Link to="/contact" className="hover:text-gray-300 font-medium">Nous contacter</Link>
                </nav>
            </div>
        </header>
    );
}
export default Header;