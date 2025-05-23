import Logo from "../assets/images/logo_full.png"; // Import the image for the background
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#424257] py-6 px-6 w-screen">

        <div className="container mx-auto mt-4 flex flex-row justify-between text-center vertical-center items-center">
            <div>
            <img src={Logo} alt="logo" className="h-14 w-24 "/>
            </div>
            <div className="flex flex-col items-end justify-center text-center">
                <p className="text-sm">© 2024-2025 Cultivon'sport</p>
            <div className="flex space-x-4 mt-2"> 
                <div className="youtube-icon flex items-center justify-center w-8 h-8 rounded-full text-white border-white border-2 hover:bg-red-600 transition duration-300 ease-in-out">
                    <FaYoutube />
                </div>
                <div className="youtube-icon flex items-center justify-center w-8 h-8 rounded-full text-white border-white border-2 hover:bg-black transition duration-300 ease-in-out">
                    <FaTiktok />
                </div>
                <div className="youtube-icon flex items-center justify-center w-8 h-8 rounded-full text-white border-white border-2 hover:bg-[linear-gradient(45deg,#f9ce34,#ee2a7b,#6228d7)] transition duration-300 ease-in-out">
                    <FaInstagram />
                </div>
            </div>
            </div>
            
        </div>
        </footer>
    );
}

export default Footer;