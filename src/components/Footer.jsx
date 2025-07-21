/* filepath: d:\Prestation Jeece\cultivon'sport\src\components\Footer.jsx */
import Logo from "../assets/images/logo_full.png";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#424257] py-4 sm:py-6 px-4 sm:px-6 w-full overflow-hidden">
            <div className="container mx-auto mt-2 sm:mt-4 flex flex-col sm:flex-row justify-between items-center text-center max-w-7xl space-y-4 sm:space-y-0">
                <div className="order-2 sm:order-1">
                    <img src={Logo} alt="logo" className="h-10 w-16 sm:h-14 sm:w-24 mx-auto sm:mx-0" loading="lazy"/>
                </div>
                <div className="flex flex-col items-center sm:items-end justify-center text-center order-1 sm:order-2">
                    <p className="text-xs sm:text-sm">© 2024-2025 Cultivon'sport</p>
                    <div className="flex space-x-3 sm:space-x-4 mt-2"> 
                        <a href="https://youtube.com/@cultivonsport" target="_blank"><div className="youtube-icon flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full text-white border-white border-2 hover:bg-red-600 transition duration-300 ease-in-out">
                            <FaYoutube className="text-xs sm:text-sm" />
                        </div></a>
                        <a href="https://www.tiktok.com/@cultivonsport" target="_blank"><div className="youtube-icon flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full text-white border-white border-2 hover:bg-black transition duration-300 ease-in-out">
                            <FaTiktok className="text-xs sm:text-sm" />
                        </div></a>
                        <a href="https://www.instagram.com/cultivonsport/#" target="_blank"><div className="youtube-icon flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full text-white border-white border-2 hover:bg-[linear-gradient(45deg,#f9ce34,#ee2a7b,#6228d7)] transition duration-300 ease-in-out">
                            <FaInstagram className="text-xs sm:text-sm" />
                        </div></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;