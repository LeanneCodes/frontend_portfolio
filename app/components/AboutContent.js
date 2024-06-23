import Image from 'next/image';

export default function AboutContent() {
  return (
    <div className="bg-teal-500 p-8 min-h-fit">
      <h2 className="text-2xl font-bold mb-4 text-white">About Me</h2>
      
      <div className="md:flex md:items-center md:space-x-8">
        {/* Headshot */}
        <div className="flex justify-center mb-8 md:mb-0">
          <Image 
            src="https://via.placeholder.com/200" 
            alt="Leanne Goldsmith" 
            width={500} 
            height={500} 
            className="rounded-full"
          />
        </div>
        
        {/* Introduction and Skills */}
        <div>
          {/* Introduction */}
          <div className="mb-8 text-white">
            <p>
              Hi, I'm Leanne Goldsmith. I transitioned from a career in advertising to frontend development. 
              My journey has taken me through various roles, including fullstack development, and now I specialize 
              in frontend development, creating engaging digital experiences.
            </p>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2 text-white">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB'].map(skill => (
                <span key={skill} className="bg-white text-gray-800 py-1 px-3 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="mb-8 text-white">
        <h3 className="text-xl font-bold mb-2">Experience</h3>
        <p>
          I have worked as a fullstack developer and a frontend developer. Currently, I specialize in frontend 
          development, creating banner ads for multiple esteemed clients.
        </p>
      </div>
    </div>
  );
}
