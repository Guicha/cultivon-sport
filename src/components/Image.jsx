/* filepath: d:\Prestation Jeece\cultivon'sport\src\components\Image.jsx */
const Image = ({ src, alt, width = 300, height = 300 }) => {
    return (
        <div className="flex flex-col items-center justify-center mt-6 sm:mt-8 text-lg sm:text-xl font-poppins mx-auto">
            <div 
                className="rounded-lg shadow-md overflow-hidden w-full max-w-sm"
            >
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </div>
            <h3 className='p-2 text-center text-xl'>{alt}</h3>
        </div>
    );
}
export default Image;