import ProjectCard from './ProjectCard';

export default function WorkContent() {
  const projects = [
    {
      image: '/gamesync.png', // Replace with actual image URLs
      title: 'GameSync',
      description: 'Streamlining gaming session scheduling with friends via an intuitive platform, leveraging RAWG API data.',
      githubLink: 'https://github.com/visualriot/Gaming-scheduler',
      liveLink: 'https://gamesync-game-session-scheduler.netlify.app/',
    },
    {
      image: '/oysterbeyond.png', // Replace with actual image URLs
      title: 'Oyster & Beyond Blog',
      description: 'A travel blog that showcases a variety of destinations and an option for users to leave comments.',
      githubLink: 'https://github.com/LeanneCodes/oyster-and-beyond-blog',
      liveLink: 'https://oyster-and-beyond-blog.vercel.app/',
    },
    {
      image: '/vaultkey.png', // Replace with actual image URLs
      title: 'VaultKey Password Generator',
      description: 'A password generator that intakes user input and forms a password between 8 and 128 characters.',
      githubLink: 'https://github.com/LeanneCodes/vault-key-generator',
      liveLink: 'https://leannecodes.github.io/vault-key-generator/',
    },
    {
      image: '/globalgrubhub.png', // Replace with actual image URLs
      title: 'Global Grub Hub',
      description: 'Top recipes from popular cuisines around the world fetched dynamically using an API.',
      githubLink: 'https://github.com/LeanneCodes/global-grub-hub',
      liveLink: 'https://global-grub-hub.vercel.app/',
    },
    {
      image: '/adbanners.png', // Replace with actual image URLs
      title: 'Display Ad Banners',
      description: 'A selection of display ad banners that I have created for multiple clients using HTML, CSS, JavaScript, and Greensock.',
      githubLink: 'https://github.com/LeanneCodes/banner-demo',
      liveLink: 'https://banner-ads.netlify.app/',
    },
    {
      image: '/budgettracker.png', // Replace with actual image URLs
      title: 'Budget Tracker',
      description: 'A website that allows users to track their expenditure and see available funds.',
      githubLink: 'https://github.com/LeanneCodes/budget-tracker',
      liveLink: 'https://budget-tracker-react-project.netlify.app/',
    },
    // Add more projects as needed
  ];

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-10 w-full text-center">Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
            className="w-full"
          />
        ))}
      </div>
    </div>
  );
}
