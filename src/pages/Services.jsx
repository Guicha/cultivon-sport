import Hero from "../components/Hero";
import Fond from "../assets/images/hero2.png";
import Image from "../components/Image";
import ActivitiesCarousel from "../components/carrousel";
import DodgeRoles from "../assets/images/dodge_roles.png";
import ReviSport from "../assets/images/revi_sport.png";
import Memory from "../assets/images/memory.png";
import CharactersCarousel from "../components/CharactersCarousel";
import Boxer from "../assets/images/personnages/le_boxeur.png";
import Lion from "../assets/images/personnages/le_lion.png";
import Corbeau from "../assets/images/personnages/le_corbeau.png";
import JoueurPeps from "../assets/images/personnages/le_peps_joueur.png";
import Tigre from "../assets/images/personnages/le_tigre.png";
import Traitre from "../assets/images/personnages/le_traitre.png";
import Voleur from "../assets/images/personnages/le_voleur.png";
import Jumeaux from "../assets/images/personnages/les_jumeaux.png";
import Invincible from "../assets/images/personnages/l_invincible.png";
import SorciereImmorale from "../assets/images/personnages/la_sorcière_immorale.png";
import Sorciere from "../assets/images/personnages/la_sorcière.png";
import Boomerang from "../assets/images/personnages/le_boomerang.png";
import Bombe from "../assets/images/personnages/la_bombe.png";
import Footballeuse from "../assets/images/personnages/la_footballeuse.png";
import ReineDeGlace from "../assets/images/personnages/la_reine_des_glaces.png";
import ApprentieSorciere from "../assets/images/personnages/l_apprentie_sorciere.png";

import DevisForm from "../components/Devis_form";

import ImageCarousel from "../components/ImageCarousel";

const Services = () => {
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
    <div className="activity-page bg-[#2C2C3A]">
      <Hero
        image={Fond}
        title="Des activités sportives qui stimulent le corps et l’esprit"
        subtitle="Découvrez des jeux et défis uniques qui allient réflexion et activité physique. 
            Que vous soyez un enfant, un adulte ou une entreprise à la recherche d’un team-building original, 
            nos expériences sont conçues pour être accessibles, ludiques et stimulantes. 
            Esprit d’équipe, stratégie et amusement garantis !"
      />

      <div className="service px-50 py-20">
        <h1 className="text-5xl pt-10 font-bold font-komila-axis text-center text-[#C99F17]">
          Nos services
        </h1>
        <div className="flex flex-row items-center justify-between mt-8 space-x-4">
          <div className="flex flex-col items-center justify-center mt-8 font-poppins">
            <Image
              src={DodgeRoles}
              alt="Dodges Roles"
              width={400}
              height={200}
            ></Image>
            <h3 className="p-2">
              Et si on testait la balle au prisonnier 3.0 !
            </h3>
          </div>
          <div className="flex flex-col flex-wrap items-center justify-center mt-8 font-poppins">
            <Image
              src={ReviSport}
              alt="Révi'sport"
              width={400}
              height={200}
            ></Image>
            <h3 className="p-2">
              Et si on révisait en pratiquant une activité physique !
            </h3>
          </div>
          <div className="flex flex-col flex-wrap items-center justify-center mt-8 font-poppins">
            <Image
              src={Memory}
              alt="Memory géant"
              width={400}
              height={200}
            ></Image>
            <h3 className="p-2">
              Et si on travaillait sa mémoire tout en s'amusant et en bougeant!
            </h3>
          </div>
        </div>
        <ActivitiesCarousel />
      </div>
      {/* Nos personnages */}
      <div className="space-y-20 px-50 py-20 flex flex-col items-center justify-center">
        <h1 className="text-5xl pt-10 font-bold font-komila-axis text-center text-[#C99F17]">
          Nos personnages
        </h1>
        <p className="px-10 leading-10 text-center">
          Chaque activité prend une nouvelle dimension grâce à nos personnages
          aux compétences variées. Que vous soyez stratège, meneur ou joueur
          agile, chacun a un rôle à jouer pour faire basculer la partie !
        </p>

        {/* Character Carousel Component */}
        <CharactersCarousel characters={characters} />
      </div>

      {/* Quelques Image */}
      <div className="flex flex-col items-center justify-center space-y-10 px-50 py-20">
        <h1 className="text-5xl p-10 font-bold font-komila-axis text-center text-[#C99F17]">
          Quelques images de Dodge Rôles
        </h1>
        <p className="px-10 leading-10 text-center">
          Laissez-vous inspirer par quelques-unes de nos réalisations : des
          décorations raffinées, des ambiances uniques, et des instants magiques
          immortalisés.
        </p>
        <div className="grid grid-cols-4 grid-rows-3 gap-4 w-400 h-300 px-10">
          <div className="col-span-1 row-span-2">
            <img
              src={DodgeRoles}
              alt="Hero"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <img
              src={DodgeRoles}
              alt="Hero"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <img
              src={DodgeRoles}
              alt="Hero"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <img
              src={DodgeRoles}
              alt="Hero"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <img
              src={DodgeRoles}
              alt="Hero"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="col-span-2 row-span-2">
            <img
              src={DodgeRoles}
              alt="Hero"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="col-span-2 row-span-1">
            <img
              src={DodgeRoles}
              alt="Hero"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <ImageCarousel></ImageCarousel>



      {/* <OurUniverse /> */}

      <div className="flex flex-col items-center justify-center space-y-10 px-50 py-20">
        <h1 className="text-5xl p-10 font-bold font-komila-axis text-center text-[#C99F17]">
          Votre devis sur mesure !
        </h1>
        <p className="px-10 leading-10 text-center">
          Nos activités s’adaptent à vos besoins : événements privés,
          team-building, écoles ou centres de loisirs… <br />
          Demandez un devis personnalisé en quelques clics et découvrez nos
          offres adaptées à votre groupe.
        </p>
        <DevisForm />
      </div>
    </div>
  );
};
export default Services;
