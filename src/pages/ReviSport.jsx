import Hero from "../components/Hero";
import ReviSportBg from "../assets/images/revi_sport.png";
import ReviSport2 from "../assets/images/revi2.jpg";
import ReviSport3 from "../assets/images/revi3.jpg";
import Image from "../components/Image";

const ReviSport = () => {
  return (
    <div className="revis-sport-page bg-[#2C2C3A] w-full overflow-x-hidden">
      <Hero
        image={ReviSportBg}
        title="Révi'sport : à venir"
        subtitle="Et si on révisait en pratiquant une activité physique !"
      />

      <div className="content px-4 md:px-8 lg:px-16 xl:px-20 py-20 max-w-7xl mx-auto">
        <div className="space-y-16">
          {/* Description section */}
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold font-komila-axis text-[#C99F17]">
              Révi'sport, l'appli qui révolutionne l'apprentissage
            </h2>
            <p className="text-lg leading-8 max-w-5xl mx-auto">
              Révi'sport, c'est l'appli qui combine activité physique et révisions scolaires dans un seul et même jeu !
            </p>
            <p className="text-lg leading-8 max-w-4xl mx-auto">
              Français, maths, histoire… Pour progresser, il faudra répondre juste et se dépasser physiquement.
              Que ce soit à l'école, en famille ou entre amis, Révi'sport s'adapte au niveau de chacun pour des parties ludiques et motivantes.
            </p>
            <div className="bg-[#C99F17]/20 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-xl font-bold text-[#C99F17]">📱 Bientôt disponible : restez connectés !</p>
            </div>
          </div>

          {/* Benefits section */}
          <div className="bg-gray-800/50 rounded-lg p-8">
            <h3 className="text-3xl font-bold font-komila-axis text-[#C99F17] mb-8 text-center">
              Révi'sport de Cultivon'sport : Une solution complète
            </h3>
            <p className="text-lg text-center mb-8 max-w-4xl mx-auto">
              Révi'sport de Cultivon'sport offrent une solution complète et adaptée à vos besoins spécifiques. 
              Que vous soyez à l'école ou entre amis, le week-end ou pendant les vacances scolaires, 
              Révi'sport est conçu pour vous aider à réviser tout en vous amusant.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#C99F17] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">👤</span>
                </div>
                <h4 className="text-xl font-bold">Individualisation dans le contenu</h4>
                <p>Adaptation personnalisée au niveau de chacun</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#C99F17] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">📈</span>
                </div>
                <h4 className="text-xl font-bold">Résultats maximisés</h4>
                <p>Performance optimisée grâce à l'activité physique</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#C99F17] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="text-xl font-bold">Engagement garanti</h4>
                <p>Motivation et plaisir d'apprendre assurés</p>
              </div>
            </div>
          </div>

          {/* Coming soon section */}
          <div className="bg-gradient-to-r from-[#C99F17]/20 to-transparent rounded-lg p-12 text-center">
            <h3 className="text-4xl font-bold font-komila-axis text-[#C99F17] mb-6">
              Application en cours de développement
            </h3>
            <p className="text-xl mb-8">
              Notre équipe travaille activement sur cette innovation pédagogique révolutionnaire.
            </p>
            <div className="text-6xl mb-6">🚀</div>
            <p className="text-lg text-gray-300">
              Restez connectés pour être les premiers informés du lancement !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviSport;