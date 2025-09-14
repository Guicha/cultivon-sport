/* filepath: d:\Prestation Jeece\cultivon'sport\src\pages\Home.jsx */
import Hero from "../components/Hero";
import Fond from "../assets/images/video.gif";
import ActivitySection from "../components/Activity_section";
import OurUniverse from "../components/Our_Universe";
import Avis from "../components/Avis";
import Accordeon from "../components/Accordeon";

const HomePage = () => {
    return (
        <div className="home-page bg-[#2C2C3A] w-full overflow-x-hidden">
            <Hero 
                title="Bienvenue chez Cultivon'sport"
                subtitle="Chez Cultivon'sport, nous créons des activités ludiques et sportives pour tout public. Toutes nos activités son innovantes et allient capacités mentales et capacités physiques. La réflexion au cœur de l'action"
                image={Fond}
            />
            
            <ActivitySection />

            <OurUniverse />

            {/* Avis */}
            <div className="avis space-y-12 sm:space-y-16 lg:space-y-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl pt-6 sm:pt-10 font-bold font-komila-axis text-center text-[#C99F17] px-4">
                    LES AVIS DE NOS CLIENTS
                </h1>
                <p className="px-4 sm:px-6 lg:px-10 leading-7 sm:leading-8 lg:leading-10 text-center text-sm sm:text-base lg:text-lg text-white">
                    Nos participants partagent leur expérience avec Cultivon'sport. <br className="hidden sm:block" />
                    Découvrez ce qu'ils pensent de nos activités et de leur impact sur le
                    bien-être et l'apprentissage.
                </p>
                <Avis />
            </div>

            {/* FAQ */}
            <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20   py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl pt-6 sm:pt-10 font-bold font-komila-axis text-center text-[#C99F17] px-4">
                    LA FAQ
                </h1>
                <h2 className="text-lg sm:text-xl pt-6 sm:pt-10 font-bold py-3 sm:py-5 text-white">
                    Besoin d'aide?
                </h2>
                <Accordeon />
            </div>
        </div>
    );
}
export default HomePage;