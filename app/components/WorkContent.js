import ProjectCard from './ProjectCard';

export default function WorkContent() {
  const projects = [
    {
      image: 'https://via.placeholder.com/300x200', // Replace with actual image URLs
      title: 'Project One',
      description: 'Description of project one.',
    },
    {
      image: 'https://via.placeholder.com/300x200', // Replace with actual image URLs
      title: 'Project Two',
      description: 'Description of project two.',
    },
    {
      image: 'https://via.placeholder.com/300x200', // Replace with actual image URLs
      title: 'Project Three',
      description: 'Description of project three.',
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}
