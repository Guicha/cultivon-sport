import Hero from "../components/Hero";
import Fond from "../assets/images/hero3.png";

import PaulGerard from "../assets/images/PaulGerard.png";

import Engagement from "../components/engagement";

const About = () => {
    return (
        <div className="about-page bg-[#2C2C3A]">
            <Hero
                image={Fond}
                title="Qui sommes-nous ?"
                subtitle="Chez Cultivon’sport, nous croyons que le sport est bien plus qu’une simple activité : c’est un vecteur de partage, de dépassement de soi et de plaisir. Notre mission est de proposer des expériences uniques, adaptées à tous, pour favoriser l’inclusion, la cohésion et l’amusement. Découvrez ce qui nous anime au quotidien !"
            />
            {/* 3 pilliers */}
            <div className="pillars bg-[#2C2C3A] py-20">
                <h1 className="text-5xl font-bold text-center font-komila-axis text-[#C99F17] mb-10">Nos 3 piliers</h1>
                <div className="flex justify-around px-50 space-x-40">
                    <div className="pillar flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-4xl">🌍</span>
                        </div>
                        <h3 className="text-2xl font-semibold text-[#C99F17] pt-10">Nos valeurs</h3>
                        <p className="text-lg mt-4">Nous croyons en un sport inclusif, accessible et porteur de liens.</p>
                    </div>
                    <div className="pillar flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-4xl">🚩</span>
                        </div>
                        <h3 className="text-2xl font-semibold text-[#C99F17] pt-10">Notre mission</h3>
                        <p className="text-lg mt-4">Proposer des expériences ludiques et engageantes pour tous les âges.</p>
                    </div>
                    <div className="pillar flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-4xl">💡</span>
                        </div>
                        <h3 className="text-2xl font-semibold text-[#C99F17] pt-10">Notre approche</h3>
                        <p className="text-lg mt-4">Des expériences immersives qui allient mouvement, stratégie et plaisir.</p>
                    </div>
                </div>
            </div>

            {/* Notre Engagement */}
            <div className="commitment bg-[#2C2C3A] py-20 px-50">
                <h1 className="text-5xl font-bold text-center font-komila-axis text-[#C99F17] mb-10">Notre Engagement</h1>
                <p className="text-lg text-center  mx-auto px-4">
                    Chez Cultivon’sport, nous croyons fermement que le sport est bien plus qu'une simple activité physique. C'est un puissant vecteur de bien-être, de santé et d'apprentissage. Notre engagement se traduit par des initiatives innovantes et inclusives qui repoussent les limites du jeu et de l'éducation.
                </p>

                <div className="flex flex-row items-center justify-center mt-10 space-x-10">
                    <Engagement/>

                </div>

            </div>

            {/* Notre Expertise */}
        
            <div className="expertise bg-[#2C2C3A] py-20 px-50">
                <h1 className="text-5xl font-bold text-center font-komila-axis text-[#C99F17] mb-10">Notre Expertise</h1>
                <p className="text-lg text-center mx-auto px-4">
                    Notre projet est porté par une équipe de professeurs de toutes disciplines passionnés et spécialistes du milieu scolaire.
                </p>
                <div className="flex flex-row items-center justify-center mt-10">
                    <img src={PaulGerard} alt="Paul Gérard" width={300}/>
                    <div className="ml-10">
                        <h2 className="text-4xl font-bold text-[#C99F17]">Paul GÉRARD</h2>
                        <p className="text-lg mt-2">
                            Le créateur de ce projet, Paul GÉRARD, est professeur d’Éducation Physique et Sportive depuis 20 ans
                            en Seine-Saint-Denis. Diplômé en STAPS mention éducation et motricité ainsi qu’en entraînement
                            sportif, il s’est toujours investi dans le développement de nouvelles pratiques sportives et
                            pédagogiques pour susciter l’intérêt et l’engagement des élèves. <br /><br />

                            Notre approche repose sur une connaissance approfondie des besoins des élèves et des méthodes
                            les plus efficaces pour stimuler leur curiosité et leur motivation à travers le sport et le jeu. <br /><br />

                            Notre objectif : créer un pont entre sport, imagination et savoir, en concevant des activités qui allient
                            plaisir, engagement et apprentissage.
                            </p>
                    </div>
                </div>
            </div>


        </div>
    )

}
export default About;