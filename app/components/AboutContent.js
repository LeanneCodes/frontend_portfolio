import Image from 'next/image';

export default function AboutContent() {
  return (
    <div className="bg-teal-500 p-8 min-h-fit">
      <h2 className="text-2xl font-bold mb-5 text-white text-center">About Me</h2>
      
      {/* Headshot */}
      <div className="flex justify-center mb-8">
        <Image 
          src="/headshot.png" 
          alt="Leanne Goldsmith" 
          width={200} 
          height={200} 
          className="rounded-full"
        />
      </div>
      
      {/* Introduction */}
      <div className="mb-8 text-white text-center">
        <p>
          Hi, I'm Leanne Goldsmith. I specialised in Addressable Advertising,
          coding display ad banners for clients like Eurostar, Audible, Jameson,
          and Legoland. I love turning Adobe XD, Figma, and Photoshop designs
          into live ads using HTML, CSS, JavaScript, and Greensock. In my spare
          time, I build React projects and aim to expand my skills in more
          frontend technologies.<br/><br/>Over the past 3 years, I completed two bootcamps:
          one in <a
          className='text-white underline font-bold'
          href='https://www.credential.net/abe70729-0419-4049-a752-62b032d231eb#gs.ao1xri'
          target='_blank' rel='noopener noreferrer'>
            Fullstack Diploma
          </a>
          and another in <a
          className='text-white underline font-bold'
          href='https://skillsbootcamp.credential.getsmarter.com/bc3bb14e-0986-4109-a16a-e1f9c5af4378#gs.ao1x8n'
          target='_blank' rel='noopener noreferrer'>
            Frontend Development
          </a>.
          Now, in my full-time Frontend Developer role, I'm seeking new challenges
          by collaborating with hardworking people and contributing to fun and innovative projects.
        </p>
      </div>

      {/* Skills */}
      <div className="mb-8 text-center">
        <h3 className="text-xl font-bold text-white mb-5">Skills</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {[
            'HTML', 'CSS', 'JavaScript ES6', 'TypeScript', 'NodeJs', 'ReactJs', 
            'NextJs', 'Bootstrap', 'Tailwind', 'API', 'jQuery', 'GitHub',
            'Git Versioning', 'Photoshop', 'Greensock', 'VS Code'
          ].map(skill => (
            <span key={skill} className="bg-white text-gray-800 py-1 px-3 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
