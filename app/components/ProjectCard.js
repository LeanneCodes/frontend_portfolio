export default function ProjectCard({ image, title, description, githubLink, liveLink }) {
  return (
    <div className="relative w-full h-80 overflow-hidden rounded-lg shadow-lg group">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-pink-500 bg-opacity-100 flex flex-col justify-center items-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white text-xl font-bold">{title}</h3>
        <p className="text-white mt-2 text-center">{description}</p>
        <div className="mt-4 flex space-x-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline"
          >
            GitHub README
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline"
          >
            Live Project
          </a>
        </div>
      </div>
    </div>
  );
}
