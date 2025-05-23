const Image = ({ src, alt, width, height }) => {
    return (
        <div className="flex flex-col items-center justify-center mt-8 text-xl font-poppins">
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="rounded-lg shadow-md"
        />
        <h3 className='p-2'>{alt}</h3>
        </div>
    );
}
export default Image;