import Hero from "../components/Hero";
import Fond from "../assets/images/hero4.png";

import Map from "../components/Map";
import ContactForm from "../components/ContactForm";


const Contact = () => {
    return (
        <div className="contact-page bg-[#2C2C3A] w-full overflow-x-hidden">
            <Hero
                image={Fond}
                title="Nous contacter"
                subtitle="Une question sur nos activités ? Nous sommes là pour vous ! Retrouvez ici tous nos moyens de contact et n’hésitez pas à nous écrire, nous appeler ou venir nous rencontrer."
            />
        <div className="contact-content px-4 md:px-8 lg:px-16 xl:px-20 py-20 max-w-7xl mx-auto">
                <h1 className="text-5xl pt-10 font-bold font-komila-axis text-center text-[#C99F17]">Venez nous rencontrer</h1>
                <Map/>
        </div>
        <div className="contact-content px-4 md:px-8 lg:px-16 xl:px-20 py-20 max-w-7xl mx-auto">
                <h1 className="text-5xl pt-10 font-bold font-komila-axis text-center text-[#C99F17]">Envoyez-nous un message</h1>
                <ContactForm/>
        </div>



        </div>
    )
}
export default Contact;