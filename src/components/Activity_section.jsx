/* filepath: d:\Prestation Jeece\cultivon'sport\src\components\Activity_section.jsx */
import videoCrop from '../assets/images/videocrop.mp4';
import { useNavigate } from 'react-router-dom';

const ActivitySection = () => {
  const navigate = useNavigate();
  
  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="activity px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl md:text-5xl pt-6 sm:pt-10 font-bold font-komila-axis text-center text-[#C99F17] px-4">NOS ACTIVITÉS</h1>
      
      <div className="mt-8 flex flex-col items-center">
        <video 
          className="w-full max-w-4xl h-auto rounded-lg shadow-lg"
          controls
          autoPlay
          muted
          loop
        >
          <source src={videoCrop} type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
        
        <div className="text-center mt-8">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Découvrez nos activités
          </h3>
          <p className="text-white leading-relaxed max-w-3xl mx-auto mb-6">
            Bougez, réfléchissez, progressez ! Nos activités innovantes mêlent stratégie, action et plaisir. 
            Venez découvrir Dodge Rôles, Révi'Sport et bien d'autres expériences uniques.
          </p>
          <div className="flex justify-center">
            <button 
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-md font-medium shadow-sm hover:shadow-md transition-all duration-300 ease-in-out hover:scale-105 text-base" 
              onClick={handleContactClick}
            >
              Contactez-nous
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ActivitySection;