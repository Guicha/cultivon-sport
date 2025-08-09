import Hero from "../components/Hero";
import MemoryBg from "../assets/images/memory.png";
import Memory1 from "../assets/images/memory1.jpg";
import Memory2 from "../assets/images/memory3.jpg";
import Image from "../components/Image";

const MemorysCube = () => {
  return (
    <div className="memorys-cube-page bg-[#2C2C3A] w-full overflow-x-hidden">
      <Hero
        image={MemoryBg}
        title="Memory's cube"
        subtitle="Et si on travaillait sa mémoire tout en s'amusant et en bougeant !"
      />

      <div className="content px-4 md:px-8 lg:px-16 xl:px-20 py-20 max-w-7xl mx-auto">
        <div className="space-y-16">
          {/* Description section */}
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold font-komila-axis text-[#C99F17]">
              Un memory géant pour jouer autrement
            </h2>
            <p className="text-lg leading-8 max-w-4xl mx-auto">
              Le Memory's Cube, c'est un memory géant où mémoire, observation et déplacement se combinent pour faire jouer petits et grands autrement.
            </p>
            <p className="text-lg leading-8 max-w-4xl mx-auto">
              Deux équipes s'affrontent en relais pour retrouver le plus vite possible les bonnes paires cachées sur les différentes faces du cube.
              Avec plusieurs niveaux de difficulté et des thèmes variés (animaux, sports, objets…), l'activité s'adapte facilement à tous les âges.
            </p>
            <p className="text-lg leading-8 max-w-4xl mx-auto font-semibold text-[#C99F17]">
              Ludique, dynamique et idéal pour les écoles, centres ou événements, le Memory's Cube fait rimer apprentissage, mouvement et esprit d'équipe.
            </p>
          </div>

          {/* Image gallery */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#C99F17] text-center">Le jeu en images</h3>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                <Image src={Memory1} alt=" " width={400} height={300} />
                <Image src={Memory2} alt=" " width={400} height={300} />
              </div>
            </div>
          </div>

          {/* Key features section */}
          <div className="bg-gray-800/50 rounded-lg p-8">
            <h3 className="text-3xl font-bold font-komila-axis text-[#C99F17] mb-8 text-center">
              Pourquoi choisir Memory's Cube ?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#C99F17] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🎲</span>
                </div>
                <h4 className="text-xl font-bold">Memory Géant</h4>
                <p>Version XXL du jeu classique pour une expérience immersive</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#C99F17] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🏃</span>
                </div>
                <h4 className="text-xl font-bold">Jeu en Relais</h4>
                <p>Deux équipes s'affrontent dans un défi dynamique et amusant</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#C99F17] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">👀</span>
                </div>
                <h4 className="text-xl font-bold">Mémoire & Observation</h4>
                <p>Combine mémorisation, observation et déplacement</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#C99F17] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="text-xl font-bold">Plusieurs Niveaux</h4>
                <p>Différents niveaux de difficulté pour tous les âges</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#C99F17] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🎨</span>
                </div>
                <h4 className="text-xl font-bold">Thèmes Variés</h4>
                <p>Animaux, sports, objets... pour ne jamais s'ennuyer</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#C99F17] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="text-xl font-bold">Esprit d'Équipe</h4>
                <p>Favorise la cohésion et la collaboration entre joueurs</p>
              </div>
            </div>
          </div>

          {/* How to play section */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold font-komila-axis text-[#C99F17] text-center">
              Comment jouer ?
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#C99F17] rounded-full flex items-center justify-center text-black font-bold">1</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Formation des équipes</h4>
                  <p>Deux équipes se forment et se préparent pour le défi memory en relais.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#C99F17] rounded-full flex items-center justify-center text-black font-bold">2</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Observation des cubes</h4>
                  <p>Les joueurs observent les différentes faces du cube pour mémoriser l'emplacement des paires.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#C99F17] rounded-full flex items-center justify-center text-black font-bold">3</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Course en relais</h4>
                  <p>Les équipes s'affrontent en relais pour retrouver le plus vite possible les bonnes paires cachées.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#C99F17] rounded-full flex items-center justify-center text-black font-bold">4</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Victoire d'équipe</h4>
                  <p>L'équipe qui trouve le plus de paires en un temps donné remporte la partie !</p>
                </div>
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
                <p className="text-gray-300">Activité pédagogique alliant apprentissage, mouvement et esprit d'équipe</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-[#C99F17] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🏢</span>
                </div>
                <h4 className="text-xl font-bold">Les Centres</h4>
                <p className="text-gray-300">Animation ludique et dynamique pour centres de loisirs et vacances</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-[#C99F17] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🎪</span>
                </div>
                <h4 className="text-xl font-bold">Les Événements</h4>
                <p className="text-gray-300">Animation originale pour festivals, fêtes et événements grand public</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg text-[#C99F17] font-semibold">
                Une activité qui s'adapte facilement à tous les âges !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemorysCube;