import Hero from "../components/Hero";
import Fond from "../assets/images/hero2.png";
import Image from "../components/Image";
// import ActivitiesCarousel from "../components/carrousel";
import DodgeRoles from '../assets/images/dodge_roles.png';
import ReviSport from '../assets/images/revi_sport.png';
import Memory from '../assets/images/memory.png';


const Services = () => {

    return (
        <div className="activity-page bg-[#2C2C3A]">
            <Hero
            image={Fond}
            title="Des activités sportives qui stimulent le corps et l’esprit"
            subtitle="Découvrez des jeux et défis uniques qui allient réflexion et activité physique. 
            Que vous soyez un enfant, un adulte ou une entreprise à la recherche d’un team-building original, 
            nos expériences sont conçues pour être accessibles, ludiques et stimulantes. 
            Esprit d’équipe, stratégie et amusement garantis !"/>

            <div className="service px-50 py-20">
                <div className='flex flex-row items-center justify-between mt-8 space-x-4'>
                    <div className="flex flex-col items-center justify-center mt-8 font-poppins">
                    <Image src={DodgeRoles} alt="Dodges Roles" width={400} height={200}></Image>
                    <h3 className='p-2'>Et si on testait la balle au prisonnier 3.0 !</h3>
                    </div>
                    <div className="flex flex-col flex-wrap items-center justify-center mt-8 font-poppins">
                        <Image src={ReviSport} alt="Révi'sport" width={400} height={200}></Image>
                        <h3 className='p-2'>Et si on révisait en pratiquant une activité physique !</h3>
                    </div>
                    <div className="flex flex-col flex-wrap items-center justify-center mt-8 font-poppins">
                    <Image src={Memory} alt="Memory géant" width={400} height={200}></Image>
                    <h3 className='p-2'>Et si on travaillait sa mémoire tout en s'amusant et en bougeant!</h3>
                    </div>
                
                </div>
                {/* <ActivitiesCarousel/> */}
                

            </div>

        </div>

        

    )
}
export default Services;