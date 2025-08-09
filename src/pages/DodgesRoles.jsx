import Hero from "../components/Hero";
import DodgeRolesBg from "../assets/images/dodge.jpg";
import DodgeRoles1 from "../assets/images/dodge1.jpg";
import DodgeRoles2 from "../assets/images/dodge2.jpg";
import DodgeRoles3 from "../assets/images/dodge3.jpg";
import DodgeRoles4 from "../assets/images/dodge4.jpg";
import Image from "../components/Image";
import CharactersCarousel from "../components/CharactersCarousel";
import Boxer from "../assets/images/personnages/le_boxeur.jpg";
import Lion from "../assets/images/personnages/le_lion.jpg";
import Corbeau from "../assets/images/personnages/le_corbeau.jpg";
import JoueurPeps from "../assets/images/personnages/le_peps_joueur.jpg";
import Tigre from "../assets/images/personnages/le_tigre.jpg";
import Traitre from "../assets/images/personnages/le_traitre.jpg";
import Voleur from "../assets/images/personnages/le_voleur.jpg";
import Jumeaux from "../assets/images/personnages/les_jumeaux.jpg";
import Invincible from "../assets/images/personnages/l_invincible.jpg";
import SorciereImmorale from "../assets/images/personnages/la_sorcière_immorale.jpg";
import Sorciere from "../assets/images/personnages/la_sorcière.jpg";
import Boomerang from "../assets/images/personnages/le_boomerang.jpg";
import Bombe from "../assets/images/personnages/la_bombe.jpg";
import Footballeuse from "../assets/images/personnages/la_footballeuse.jpg";
import ReineDeGlace from "../assets/images/personnages/la_reine_des_glaces.jpg";
import ApprentieSorciere from "../assets/images/personnages/l_apprentie_sorciere.jpg";

const DodgesRoles = () => {
  // Character data with links
  const characters = [
    {
      image: Boxer,
      alt: "Le boxeur",
      name: "Le Boxeur",
      link: "https://youtu.be/2gllHs44DLM?feature=shared",
    },
    {
      image: Corbeau,
      alt: "Le corbeau",
      name: "Le Corbeau",
      link: "https://www.youtube.com/watch?v=jQUvqQyUFwI",
    },
    {
      image: Lion,
      alt: "Le lion",
      name: "Le Lion",
      link: "https://youtu.be/aBCV4wh5-l8?feature=shared",
    },
    {
      image: JoueurPeps,
      alt: "Le joueur peps",
      name: "Le Joueur Peps",
      link: "https://youtu.be/YNyFRPM2HfU?feature=shared",
    },
    {
      image: Tigre,
      alt: "Tigre",
      name: "Tigre",
      link: "https://www.youtube.com/watch?feature=shared&v=F4dQtMByasQ",
    },
    {
      image: Traitre,
      alt: "Le traître",
      name: "Le Traître",
      link: "https://www.youtube.com/watch?feature=shared&v=k56v6kPgxlw",
    },
    {
      image: Voleur,
      alt: "Le voleur",
      name: "Le Voleur",
      link: "https://www.youtube.com/watch?feature=shared&v=mN3HZt3CZ2g",
    },
    {
      image: Jumeaux,
      alt: "Les jumeaux",
      name: "Les Jumeaux",
      link: "https://www.youtube.com/watch?feature=shared&v=HGVGJFCVCPk",
    },
    {
      image: Invincible,
      alt: "L'invincible",
      name: "L'Invincible",
      link: "https://www.youtube.com/watch?feature=shared&v=Ctzh-absw-I",
    },
    {
      image: SorciereImmorale,
      alt: "La sorcière immorale",
      name: "La Sorcière Immorale",
      link: "https://www.youtube.com/watch?feature=shared&v=_YQDYSZ7zTI",
    },
    {
      image: Sorciere,
      alt: "La sorcière",
      name: "La Sorcière",
      link: "https://www.youtube.com/watch?feature=shared&v=Yg15bkNCBXs",
    },
    {
      image: Boomerang,
      alt: "Le boomerang",
      name: "Le Boomerang",
      link: "https://www.youtube.com/watch?feature=shared&v=m2XS5Sdb6DI",
    },
    {
      image: Bombe,
      alt: "La bombe",
      name: "La Bombe",
      link: "https://www.youtube.com/watch?feature=shared&v=R1mWtZv3rZ0",
    },
    {
      image: Footballeuse,
      alt: "La footballeuse",
      name: "La Footballeuse",
      link: "https://www.youtube.com/watch?feature=shared&v=JlCK4EQe5ho",
    },
    {
      image: ReineDeGlace,
      alt: "La reine des glaces",
      name: "La Reine des Glaces",
      link: "https://www.youtube.com/watch?feature=shared&v=d4iGPO5ppRc",
    },
    {
      image: ApprentieSorciere,
      alt: "L'apprentie sorcière",
      name: "L'Apprentie Sorcière",
      link: "https://www.youtube.com/watch?feature=shared&v=pomIZmMFgFQ",
    },
  ];

  return (
    <div className="dodges-roles-page bg-[#2C2C3A] w-full overflow-x-hidden">
      <Hero
        image={DodgeRolesBg}
        title="Dodges Rôles"
        subtitle="Et si on testait la balle au prisonnier 3.0 !"
      />

      <div className="content px-4 md:px-8 lg:px-16 xl:px-20 py-20 max-w-7xl mx-auto">
        <div className="space-y-16">
          {/* Description section */}
          <div className="text-center space-y-8">
            <h2 className="text-4xl/15 font-bold font-komila-axis text-[#C99F17]">
              Qu'est-ce que le Dodge Rôles ?
            </h2>
            <p className="text-lg leading-8 max-w-4xl mx-auto">
              Le Dodge Rôles, c'est la rencontre explosive entre la balle au prisonnier et le jeu de rôles ! 
              Ajoutez-y des cartes, des personnages inspirés de l'univers manga, et une bonne dose de stratégie, 
              et vous obtenez une activité sportive aussi fun qu'immersive.
            </p>
            <p className="text-lg leading-8 max-w-4xl mx-auto">
              Chaque joueur incarne un rôle unique avec des pouvoirs spéciaux qui peuvent renverser le cours de la partie.
            </p>
            <p className="text-lg leading-8 max-w-4xl mx-auto font-semibold text-[#C99F17]">
              Pensé pour tous les âges et tous les niveaux, ce jeu coopératif met la cohésion d'équipe au cœur de la victoire. 
              Un univers original, riche en actions et en rebondissements, qui ravira petits et grands.
            </p>
          </div>

          {/* Image gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-4">
              <Image src={DodgeRoles4} alt="Stratégie en action" width={300} height={200} />
            </div>
            <div className="space-y-4">
              <Image src={DodgeRoles1} alt="Travail d'équipe" width={300} height={200} />
            </div>
            <div className="space-y-4">
              <Image src={DodgeRoles3} alt="Agilité et réflexes" width={300} height={200} />
            </div>
            <div className="space-y-4">
              <Image src={DodgeRoles2} alt="Moments de victoire" width={300} height={200} />
            </div>
          </div>

          {/* Features section */}
          {/* <div className="bg-gray-800/50 rounded-lg p-8">
            <h3 className="text-3xl font-bold font-komila-axis text-[#C99F17] mb-8 text-center">
              Le Dodge Rôles offre une introduction ludique et éducative
            </h3>
            <p className="text-lg text-center mb-8 text-gray-300">
              Cette activité est structurée pour être inclusive et adaptée à tous les âges et niveaux de compétence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#C99F17] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🎮</span>
                </div>
                <h4 className="text-xl font-bold">Approche ludique</h4>
                <p>Jeu fun et immersif pour tous les participants</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#C99F17] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🧐</span>
                </div>
                <h4 className="text-xl font-bold">Réflexion</h4>
                <p>Développement de la pensée stratégique et tactique</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#C99F17] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🔍</span>
                </div>
                <h4 className="text-xl font-bold">Analyse</h4>
                <p>Capacité d'observation et de prise de décision rapide</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#C99F17] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="text-xl font-bold">Esprit d'équipe</h4>
                <p>Cohésion et collaboration au cœur de la victoire</p>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#C99F17] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🃏</span>
                </div>
                <h4 className="text-xl font-bold">Cartes & Stratégie</h4>
                <p>Système de cartes pour enrichir le gameplay</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#C99F17] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🥷</span>
                </div>
                <h4 className="text-xl font-bold">Univers Manga</h4>
                <p>Personnages inspirés de l'univers manga</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#C99F17] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="text-xl font-bold">Pouvoirs Spéciaux</h4>
                <p>Chaque rôle possède des capacités uniques</p>
              </div>
            </div>
          </div> */}

          {/* How to play section */}
          {/* <div className="space-y-8">
            <h3 className="text-3xl font-bold font-komila-axis text-[#C99F17] text-center">
              Comment jouer au Dodge Rôles ?
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#C99F17] rounded-full flex items-center justify-center text-black font-bold">1</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Distribution des cartes personnages</h4>
                  <p>Chaque joueur reçoit secrètement une carte avec un personnage inspiré de l'univers manga et ses pouvoirs spéciaux uniques.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#C99F17] rounded-full flex items-center justify-center text-black font-bold">2</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Début de la partie</h4>
                  <p>Les équipes se forment et le jeu démarre comme une balle au prisonnier, mais avec une dimension stratégique supplémentaire.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#C99F17] rounded-full flex items-center justify-center text-black font-bold">3</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Utilisation des pouvoirs</h4>
                  <p>Les joueurs activent stratégiquement leurs capacités spéciales pour renverser le cours de la partie et aider leur équipe.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#C99F17] rounded-full flex items-center justify-center text-black font-bold">4</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Victoire d'équipe</h4>
                  <p>La cohésion d'équipe et la bonne utilisation des rôles déterminent l'équipe gagnante dans ce jeu riche en rebondissements.</p>
                </div>
              </div>
            </div>
          </div> */}

          {/* Characters section */}
          <div className="space-y-20 px-4 md:px-8 lg:px-16 xl:px-20 py-20 flex flex-col items-center justify-center max-w-7xl mx-auto">
            <h3 className="text-3xl font-bold font-komila-axis text-[#C99F17] text-center">
              Nos personnages
            </h3>
            <p className="px-10 leading-10 text-center">
              Chaque activité prend une nouvelle dimension grâce à nos personnages
              aux compétences variées. Que vous soyez stratège, meneur ou joueur
              agile, chacun a un rôle à jouer pour faire basculer la partie !
            </p>

            {/* Character Carousel Component */}
            <CharactersCarousel characters={characters} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DodgesRoles;