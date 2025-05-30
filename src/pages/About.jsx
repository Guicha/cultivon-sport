import Hero from "../components/Hero";
import Fond from "../assets/images/hero3.png";

const About = () => {
    return (
        <div className="about-page bg-[#2C2C3A]">
            <Hero
                image={Fond}
                title="Qui sommes-nous ?"
                subtitle="Chez Cultivon’sport, nous croyons que le sport est bien plus qu’une simple activité : c’est un vecteur de partage, de dépassement de soi et de plaisir. Notre mission est de proposer des expériences uniques, adaptées à tous, pour favoriser l’inclusion, la cohésion et l’amusement. Découvrez ce qui nous anime au quotidien !"
            />
            <div className="about-content px-50 py-20">
                <h1 className="text-5xl pt-10 font-bold font-komila-axis text-center text-[#C99F17]">Notre histoire</h1>
                <p className="text-lg pt-5 text-center">
                    Fondée par une équipe passionnée de sport et d'éducation, Cultivon’sport a pour objectif de créer des activités qui stimulent à la fois le corps et l'esprit. Nous croyons que le jeu est un puissant vecteur d'apprentissage et de développement personnel.
                </p>
            </div>
        </div>
    )

}
export default About;