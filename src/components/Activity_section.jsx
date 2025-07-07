/* filepath: d:\Prestation Jeece\cultivon'sport\src\components\Activity_section.jsx */
import DodgeRoles from '../assets/images/dodge_roles.png';
import ReviSport from '../assets/images/revi_sport.png';
import Memory from '../assets/images/memory.png';
import Image from './Image';

const ActivitySection = () => {
  const handleContactClick = () => {
    // Redirect to the contact page and focus on the contact form
    window.location.href = '/contact#contact';
  };

  return (
    <div className="activity px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl md:text-5xl pt-6 sm:pt-10 font-bold font-komila-axis text-center text-[#C99F17] px-4">NOS ACTIVITÉS</h1>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 place-items-center'>
        <Image src={DodgeRoles} alt="Dodges Roles" width={300} height={300}></Image>
        <Image src={ReviSport} alt="Révi'sport" width={300} height={300}></Image>
        <Image src={Memory} alt="Memory géant" width={300} height={300}></Image>
      </div>

      <div className='flex flex-col lg:flex-row mt-8 sm:mt-12 space-y-6 lg:space-y-0 lg:space-x-8'>
        <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold lg:pr-8'>Découvrez nos activités</h3>
        <div className='flex flex-col items-center lg:items-end justify-start lg:justify-end flex-1'>
          <p className='text-left lg:text-right leading-relaxed'>Bougez, réfléchissez, progressez ! Nos activités innovantes mêlent stratégie, action et plaisir. Venez découvrir Dodge Rôles, Révi'Sport et bien d'autres expériences uniques.</p>
          <button 
            className="mt-4 sm:my-6 px-4 sm:px-5 py-2 sm:py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-md font-medium shadow-sm hover:shadow-md transition-all duration-300 ease-in-out hover:scale-105 text-sm sm:text-base" 
            onClick={handleContactClick}
          >
            Contactez-nous
          </button>
        </div>
      </div>
    </div>
  );
}
export default ActivitySection;