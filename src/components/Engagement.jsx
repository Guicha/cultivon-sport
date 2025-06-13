import Image1 from "../assets/images/engagement/image1.png";
import Image2 from "../assets/images/engagement/image2.png";
import Image3 from "../assets/images/engagement/image3.png";
import BackImage from "../assets/images/backimage.png";


const Engagement = () => {
  const sections = [
    {
      id: 1,
      title: "Le sport comme levier de bien-être",
      text: "Convaincus que le sport est un formidable levier pour le bien-être, la santé et l'apprentissage, nous développons des activités innovantes, notamment movement, réflexion et acquisition de connaissances avec des univers inspirants comme le manga et la culture geek.",
      image: Image1,
      imagePosition: "left"
    },
    {
      id: 2,
      title: "Accessibilité et dynamisme",
      text: "Notre ambition est de rendre la pratique sportive accessible, dynamique et engageante en repoussant les limites du jeu et de l'apprentissage. Nous créons des expériences qui favorisent l'immersion, l'inclusion, la stratégie et l'exploration physique tout en stimulant la curiosité et la réflexion.",
      image: Image2,
      imagePosition: "right"
    },
    {
      id: 3,
      title: "Innovation et projets futurs",
      text: "En 2024, nous avons lancé notre premier projet, le Dodge Notes, une expérience unique où sport, stratégie et immersion narrative s'entremêlent pour proposer un jeu captivant et évolutif. Forts de cet élan, nous travaillons déjà sur de nouvelles activités qui verront le jour en 2025-2026, toujours dans cette logique d'innovation et de dépassement de soi.",
      image: Image3,
      imagePosition: "left"
    }
  ];

  return (
    <div className="text-white min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-24">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
              section.imagePosition === 'right' ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Image Section */}
            <div className="flex-shrink-0">
              <div className="relative">
                {/* Background decorative shape */}
                <img 
                  src={BackImage}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover shadow-lg transform -rotate-3"
                />
                <div className="relative w-64 h-64 rounded-full overflow-hidden scale-70">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Text Section */}
            <div className="flex-1 text-center lg:text-left px-8 lg:px-8">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-100">
                {section.title}
              </h2>
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                {section.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Optional decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-10"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-green-500 rounded-full opacity-10"></div>
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-purple-500 rounded-full opacity-10"></div>
    </div>
  );
};

export default Engagement;