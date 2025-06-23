/* filepath: d:\Prestation Jeece\cultivon'sport\src\components\Image.jsx */
const Image = ({ src, alt, width, height }) => {
    return (
        <div className="flex flex-col items-center justify-center mt-6 sm:mt-8 text-lg sm:text-xl font-poppins w-full max-w-sm mx-auto">
            <img
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="rounded-lg shadow-md w-full h-auto object-cover"
                loading="lazy"
            />
            <h3 className='p-2 text-center text-sm sm:text-base lg:text-lg'>{alt}</h3>
        </div>
    );
}
export default Image;