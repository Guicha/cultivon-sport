import Hero from '../assets/images/hero.png';
import Memory from '../assets/images/memory.png';

import Image1 from '../assets/images/mozaique1/image1.png';
import Image2 from '../assets/images/mozaique1/image2.png';
import Image3 from '../assets/images/mozaique1/image3.png';
import Image4 from '../assets/images/mozaique1/image4.png';
import Image5 from '../assets/images/mozaique1/image5.png';
import Image6 from '../assets/images/mozaique1/image6.png';
import Image7 from '../assets/images/mozaique1/image7.png';

const OurUniverse = () => {
  return (

    <div className="our-universe space-y-20 px-50 py-20 flex flex-col items-center justify-center">

    <h1 className="text-5xl pt-10 font-bold font-komila-axis text-center text-[#C99F17]">PLONGEZ DANS NOTRE UNIVERS</h1>
    <p className="px-10 leading-10">Découvrez en images l’univers de Cultivon’sport ! Nos activités allient mouvement, réflexion et plaisir, accessibles à tous, que vous soyez enfant, adulte ou en quête d’un team-building original. Plongez dans l’action !</p>
    <div className="grid grid-cols-4 grid-rows-3 gap-4 w-400 h-300">  
            
        <div className="col-span-1 row-span-2">
            <img src={Image1} alt="Hero" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="col-span-1 row-span-1">
            <img src={Image2} alt="Hero" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="col-span-1 row-span-1">
            <img src={Image3} alt="Hero" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="col-span-1 row-span-1">
            <img src={Image4} alt="Hero" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="col-span-1 row-span-1">
            <img src={Image5} alt="Hero" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="col-span-2 row-span-2">
            <img src={Image6} alt="Hero" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="col-span-2 row-span-1">
            <img src={Image7} alt="Hero" className="w-full h-full object-cover rounded-lg" />
        </div>

    </div>

    </div>


  )
  
  
};
export default OurUniverse;
