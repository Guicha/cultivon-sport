import Hero from "../components/Hero";
import BigPenBg from "../assets/images/hero3.png";
import BigPen1 from "../assets/images/bigpen1.png";
import BigPen2 from "../assets/images/bigpen2.png";
import BigPen3 from "../assets/images/bigpen3.png";
import BigPen4 from "../assets/images/bigpen4.png";
import Image from "../components/Image";

const BigPen = () => {
  return (
    <div className="big-pen-page bg-[#2C2C3A] w-full overflow-x-hidden">
      <Hero
        image={BigPenBg}
        title="Big Pen"
        subtitle="Et si on dessinait en version géante pour faire deviner un max de mots en équipe !"
      />

      <div className="content px-4 md:px-8 lg:px-16 xl:px-20 py-20 max-w-7xl mx-auto">
        <div className="space-y-16">
          {/* Description section */}
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold font-komila-axis text-[#C99F17]">
              Du dessin, du rire, et du jeu en équipe XXL !
            </h2>
            <p className="text-lg leading-8 max-w-4xl mx-auto">
              Le Big Pen, c'est du dessin, du rire, et surtout du jeu en équipe XXL ! Armés d'un crayon géant, 
              les joueurs s'affrontent en relais pour faire deviner un maximum de mots.
            </p>
            <p className="text-lg leading-8 max-w-4xl mx-auto">
              Inspiré du célèbre Pictionary, ce jeu dynamique et coopératif mélange créativité, rapidité et fous rires garantis !
              Avec plusieurs niveaux de difficulté, des centaines de cartes, et un format accessible à tous, 
              le Big Pen est parfait pour les écoles, les centres ou les grands événements.
            </p>
          </div>

          {/* Image gallery */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#C99F17] text-center">Le jeu en images</h3>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                <Image src={BigPen1} alt=" " width={400} height={300} />
                <Image src={BigPen2} alt=" " width={400} height={300} />
                <Image src={BigPen3} alt=" " width={400} height={300} />
                <Image src={BigPen4} alt=" " width={400} height={300} />
              </div>
            </div>
          </div>

          {/* Key features section */}
          <div className="bg-gray-800/50 rounded-lg p-8">
            <h3 className="text-3xl font-bold font-komila-axis text-[#C99F17] mb-8 text-center">
              Pourquoi choisir Big Pen ?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#C99F17] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">✏️</span>
                </div>
                <h4 className="text-xl font-bold">Crayon Géant</h4>
                <p>Dessinez en grand format pour une expérience unique et amusante</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#C99F17] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🏃</span>
                </div>
                <h4 className="text-xl font-bold">Jeu en Relais</h4>
                <p>Dynamisme et mouvement garantis avec des relais d'équipe</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#C99F17] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🎭</span>
                </div>
                <h4 className="text-xl font-bold">Fous Rires Garantis</h4>
                <p>Ambiance conviviale et moments de rire partagés</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#C99F17] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="text-xl font-bold">Plusieurs Niveaux</h4>
                <p>Adaptable à tous les âges et niveaux de difficulté</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#C99F17] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🃏</span>
                </div>
                <h4 className="text-xl font-bold">Centaines de Cartes</h4>
                <p>Large variété de mots et défis pour ne jamais s'ennuyer</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#C99F17] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">👥</span>
                </div>
                <h4 className="text-xl font-bold">Accessible à Tous</h4>
                <p>Format inclusif adapté à tous les publics</p>
              </div>
            </div>
          </div>

          {/* Perfect for section */}
          <div className="bg-gradient-to-r from-[#C99F17]/20 to-transparent rounded-lg p-8">
            <h3 className="text-3xl font-bold font-komila-axis text-[#C99F17] mb-6 text-center">
              Parfait pour
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-[#C99F17] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🏫</span>
                </div>
                <h4 className="text-xl font-bold">Les Écoles</h4>
                <p className="text-gray-300">Activité ludique et éducative pour tous les niveaux scolaires</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-[#C99F17] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🏢</span>
                </div>
                <h4 className="text-xl font-bold">Les Centres</h4>
                <p className="text-gray-300">Animation parfaite pour centres de loisirs et vacances</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-[#C99F17] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🎉</span>
                </div>
                <h4 className="text-xl font-bold">Les Grands Événements</h4>
                <p className="text-gray-300">Animation spectaculaire pour festivals et événements</p>
              </div>
            </div>
          </div>

          {/* Call to action section */}
          <div className="text-center space-y-6 bg-gray-900/50 rounded-lg p-8">
            <h3 className="text-3xl font-bold font-komila-axis text-[#C99F17]">
              Prêt pour une partie de Big Pen ?
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Découvrez le plaisir du dessin en grand format ! 
              Big Pen transforme le Pictionary traditionnel en une expérience collective 
              inoubliable, pleine de rires et de créativité.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigPen;