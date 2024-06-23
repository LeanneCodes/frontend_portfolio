export default function ProjectCard({ image, title, description }) {
    return (
      <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-pink-500 bg-opacity-70 flex flex-col justify-center items-center p-4">
          <h3 className="text-white text-xl font-bold">{title}</h3>
          <p className="text-white mt-2 text-center">{description}</p>
        </div>
      </div>
    );
  }
  