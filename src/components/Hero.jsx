const Hero = ({title, subtitle, image}) => {
    image = image || '/src/assets/images/hero.png';
    return (
        <div
            className="hero bg-cover bg-center h-screen w-screen flex flex-col items-center justify-center text-center relative"
            style={{
                backgroundImage: `url(${image})`
            }}
        >
            <div className="container mx-auto px-4">
                <h1 className="text-5xl p-6 font-bold font-komila-axis text-white mt-16 leading-18">{title}</h1>
                <p className="text-white text-xl max-w-5xl mx-auto">{subtitle}</p>
            </div>
        </div>
    );
}
export default Hero;