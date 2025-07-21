import Image1 from "../assets/images/mozaique1/image1.png";
import Image2 from "../assets/images/mozaique1/image2.png";
import Image3 from "../assets/images/mozaique1/image3.png";
import Image4 from "../assets/images/mozaique1/image4.png";
import Image5 from "../assets/images/mozaique1/image5.png";
import Image6 from "../assets/images/mozaique1/image6.png";
import Image7 from "../assets/images/mozaique1/image7.png";

const OurUniverse = () => {
  return (
    <div className="our-universe space-y-8 sm:space-y-12 lg:space-y-16 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex flex-col items-center justify-center max-w-7xl mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-komila-axis text-center text-[#C99F17]">
        PLONGEZ DANS NOTRE UNIVERS
      </h1>
      <p className="leading-6 sm:leading-7 lg:leading-8 text-center text-sm sm:text-base lg:text-lg max-w-4xl text-white">
        Découvrez en images l'univers de Cultivon'sport ! Nos activités allient
        mouvement, réflexion et plaisir, accessibles à tous, que vous soyez
        enfant, adulte ou en quête d'un team-building original. Plongez dans
        l'action !
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full max-w-6xl auto-rows-[150px] sm:auto-rows-[180px] md:auto-rows-[200px] lg:auto-rows-[180px]">
        {/* Image 1 */}
        <div className="row-span-1 col-span-2 md:col-span-2 lg:col-span-1 lg:row-span-2 overflow-hidden rounded-lg">
          <img src={Image1} alt="Activité 1" className="w-full h-full object-cover" loading="lazy" />
        </div>

        {/* Image 2 */}
        <div className="overflow-hidden rounded-lg">
          <img src={Image2} alt="Activité 2" className="w-full h-full object-cover" loading="lazy" />
        </div>

        {/* Image 3 */}
        <div className="overflow-hidden rounded-lg">
          <img src={Image3} alt="Activité 3" className="w-full h-full object-cover" loading="lazy" />
        </div>

        {/* Image 4 */}
        <div className="overflow-hidden rounded-lg">
          <img src={Image4} alt="Activité 4" className="w-full h-full object-cover" loading="lazy" />
        </div>

        {/* Image 5 */}
        <div className="overflow-hidden rounded-lg">
          <img src={Image5} alt="Activité 5" className="w-full h-full object-cover" loading="lazy" />
        </div>

        {/* Image 6 */}
        <div className="md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-2 overflow-hidden rounded-lg">
          <img src={Image6} alt="Activité 6" className="w-full h-full object-cover" loading="lazy" />
        </div>

        {/* Image 7 */}
        <div className="md:col-span-2 lg:col-span-2 overflow-hidden rounded-lg">
          <img src={Image7} alt="Activité 7" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default OurUniverse;
