import Hero from "../components/Hero";
import Fond from "../assets/images/video.gif";

import PaulGerard from "../assets/images/PaulGerard.png";

import Engagement from "../components/Engagement";

const About = () => {
    return (
        <div className="about-page bg-[#2C2C3A] w-full min-h-screen overflow-x-hidden">
            <Hero
                image={Fond}
                title="Qui sommes-nous ?"
                subtitle="Chez Cultivon'sport, nous croyons que le sport est bien plus qu'une simple activité : c'est un vecteur de partage, de dépassement de soi et de plaisir. Notre mission est de proposer des expériences uniques, adaptées à tous, pour favoriser l'inclusion, la cohésion et l'amusement. Découvrez ce qui nous anime au quotidien !"
            />
            {/* 3 pilliers */}
            <div className="pillars bg-[#2C2C3A] py-12 sm:py-16 lg:py-20 w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center font-komila-axis text-[#C99F17] mb-8 lg:mb-10">Nos 3 piliers</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                        <div className="pillar flex flex-col items-center justify-center text-center">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-2xl sm:text-4xl">🌍</span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-semibold text-[#C99F17] pt-6 lg:pt-10">Nos valeurs</h3>
                            <p className="text-base sm:text-lg mt-3 lg:mt-4 text-white px-2">Nous croyons en un sport inclusif, accessible et porteur de liens.</p>
                        </div>
                        <div className="pillar flex flex-col items-center justify-center text-center">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-2xl sm:text-4xl">🚩</span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-semibold text-[#C99F17] pt-6 lg:pt-10">Notre mission</h3>
                            <p className="text-base sm:text-lg mt-3 lg:mt-4 text-white px-2">Proposer des expériences ludiques et engageantes pour tous les âges.</p>
                        </div>
                        <div className="pillar flex flex-col items-center justify-center text-center">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-2xl sm:text-4xl">💡</span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-semibold text-[#C99F17] pt-6 lg:pt-10">Notre approche</h3>
                            <p className="text-base sm:text-lg mt-3 lg:mt-4 text-white px-2">Des expériences immersives qui allient mouvement, stratégie et plaisir.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Notre Engagement */}
            <div className="commitment bg-[#2C2C3A] py-12 sm:py-16 lg:py-20 w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center font-komila-axis text-[#C99F17] mb-8 lg:mb-10">Notre Engagement</h1>
                    <p className="text-base sm:text-lg text-center text-white max-w-4xl mx-auto leading-relaxed">
                        Chez Cultivon'sport, nous croyons fermement que le sport est bien plus qu'une simple activité physique. C'est un puissant vecteur de bien-être, de santé et d'apprentissage. Notre engagement se traduit par des initiatives innovantes et inclusives qui repoussent les limites du jeu et de l'éducation.
                    </p>

                    <div className="flex flex-row items-center justify-center mt-8 lg:mt-10">
                        <Engagement/>
                    </div>
                </div>
            </div>

            {/* Notre Expertise */}
            <div className="expertise bg-[#2C2C3A] py-12 sm:py-16 lg:py-20 w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center font-komila-axis text-[#C99F17] mb-8 lg:mb-10">Notre Expertise</h1>
                    <p className="text-base sm:text-lg text-center text-white max-w-4xl mx-auto mb-8 lg:mb-10 leading-relaxed">
                        Notre projet est porté par une équipe de professeurs de toutes disciplines passionnés et spécialistes du milieu scolaire.
                    </p>
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
                        <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md flex-shrink-0">
                            <img src={PaulGerard} alt="Paul Gérard" className="w-full h-auto object-cover rounded-lg" loading="lazy"/>
                        </div>
                        <div className="flex-1 max-w-2xl">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#C99F17] mb-4">Paul GÉRARD</h2>
                            <div className="text-base sm:text-lg text-white leading-relaxed space-y-4">
                                <p>
                                    Le créateur de ce projet, Paul GÉRARD, est professeur d'Éducation Physique et Sportive depuis 20 ans
                                    en Seine-Saint-Denis. Diplômé en STAPS mention éducation et motricité ainsi qu'en entraînement
                                    sportif, il s'est toujours investi dans le développement de nouvelles pratiques sportives et
                                    pédagogiques pour susciter l'intérêt et l'engagement des élèves.
                                </p>
                                <p>
                                    Notre approche repose sur une connaissance approfondie des besoins des élèves et des méthodes
                                    les plus efficaces pour stimuler leur curiosité et leur motivation à travers le sport et le jeu.
                                </p>
                                <p>
                                    Notre objectif : créer un pont entre sport, imagination et savoir, en concevant des activités qui allient
                                    plaisir, engagement et apprentissage.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;