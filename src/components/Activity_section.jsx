import DodgeRoles from '../assets/images/dodge_roles.png';
import ReviSport from '../assets/images/revi_sport.png';
import Memory from '../assets/images/memory.png';
import Image from './Image';



const ActivitySection = () => {
  return (
    <div className="activity px-50 py-20">
      <h1 className="text-5xl pt-10 font-bold font-komila-axis text-center text-[#C99F17]">NOS ACTIVITÉS</h1>
      

      <div className='flex flex-row items-center justify-between mt-8 space-x-4'>
      <Image src={DodgeRoles} alt="Dodges Roles" width={400}></Image>
      <Image src={ReviSport} alt="Révi'sport" width={400}></Image>
      <Image src={Memory} alt="Memory géant" width={400}></Image>
      
      </div>

      <div className='flex flex-row mt-8 space-x-4'>
        <h3 className='text-4xl font-bold pr-30'>Découvrez nos activités</h3>
        <div className='flex flex-col items-end justify-items-end'>
          <p className='text-end'>Bougez, réfléchissez, progressez ! Nos activités innovantes mêlent stratégie, action et plaisir. Venez découvrir Dodge Rôles, Révi’Sport et bien d’autres expériences uniques.</p>
          <button 
            className="my-3 px-5 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-md font-medium shadow-sm hover:shadow-md transition-all duration-300 ease-in-out hover:scale-105" 
            onClick={()=> console.log('yo')}
          >
            Contactez-nous
          </button>
          </div>

      </div>
    </div>
  );
}
export default ActivitySection;