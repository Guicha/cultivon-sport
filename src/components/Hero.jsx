const Hero = ({title, subtitle, image}) => {
    image = image || '/src/assets/images/hero.png';
    return (
        <div
            className="hero bg-cover bg-center h-screen w-full flex flex-col items-center justify-center text-center relative overflow-hidden"
            style={{
                backgroundImage: `url(${image})`
            }}
        >
        <div className="absolute inset-0 bg-gray-800/90"></div>
        <div className="container mx-auto px-4 max-w-7xl">
        <h1
        className="text-3xl sm:text-4xl md:text-5xl p-6 font-extrabold 
                    drop-shadow-[0_2px_1.2px_rgba(0,0,0,0.8)] 
                    [text-shadow:_0_0_2px_black,_0_0_5px_black] 
                    [text-stroke:1px_black] 
                    font-komila-axis text-white mt-16 leading-tight break-words"
        >
        {title}
        </h1>

        <p
        className="text-white text-base sm:text-lg md:text-xl max-w-5xl 
                    drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] 
                    [text-shadow:_0_0_2px_black,_0_0_4px_black] 
                    [text-stroke:0.5px_black] 
                    mx-auto"
        >
        {subtitle}
        </p>
        </div>

        </div>
    );
}
export default Hero;