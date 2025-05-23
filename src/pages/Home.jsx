import Hero from "../components/Hero";
import ActivitySection from "../components/Activity_section";
import OurUniverse from "../components/Our_Universe";
import Avis from "../components/Avis";
import Accordeon from "../components/Accordeon";

const HomePage = () => {
    return (
        <div className="home-page bg-[#2C2C3A]">

            <Hero 
            title="Bienvenue chez Cultivon'sport"
            subtitle="Chez Cultivon'sport, nous créons des activités ludiques et sportives pour tout public. Toutes nos activités son innovantes et allient capacités mentales et capacités physiques. La réflexion au cœur de l'action"
            />
            <ActivitySection />
            <OurUniverse />

            {/* Avis */}
            <div className="avis space-y-20 px-50 py-20">
            <h1 className="text-5xl pt-10 font-bold font-komila-axis text-center text-[#C99F17]">
                LES AVIS DE NOS CLIENTS
            </h1>
            <p className="px-10 leading-10 text-center">
                Nos participants partagent leur expérience avec Cultivon’sport. <br />
                Découvrez ce qu’ils pensent de nos activités et de leur impact sur le
                bien-être et l’apprentissage.
            </p>
            <Avis />

            </div>

            

            {/* FAQ */}
            <div className="px-50 py-20">
            <h1 className="text-5xl pt-10 font-bold font-komila-axis text-center text-[#C99F17]">
                LA FAQ
            </h1>
            <h2 className="text-xl pt-10 font-bold py-5">
                Besoin d'aide?
            </h2>
            <Accordeon />
            </div>

        </div>
    );
}
export default HomePage;