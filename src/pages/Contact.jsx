import Hero from "../components/Hero";
import Fond from "../assets/images/hero4.png";


const Contact = () => {
    return (
        <div className="contact-page bg-[#2C2C3A]">
            <Hero
                image={Fond}
                title="Nous contacter"
                subtitle="Une question sur nos activités ? Nous sommes là pour vous ! Retrouvez ici tous nos moyens de contact et n’hésitez pas à nous écrire, nous appeler ou venir nous rencontrer."
            />
        <div className="contact-content px-50 py-20">
                <h1 className="text-5xl pt-10 font-bold font-komila-axis text-center text-[#C99F17]">Nous contacter</h1>
                <p className="text-lg pt-5 text-center">
                    Pour toute demande d'information, de réservation ou de partenariat, veuillez remplir le formulaire ci-dessous ou nous envoyer un email à
                </p>
        </div>
        </div>
    )
}
export default Contact;