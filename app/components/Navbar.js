'use client';

import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Navbar({ setPanelContent }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (content) => {
    setPanelContent(content);
  };

  return (
    <div className="fixed right-0 top-0 h-full text-black w-full md:w-16 z-10">
      {/* Mobile Navbar */}
      <div className="bg-yellow-400 md:hidden">
        <div className="flex justify-between items-center p-4">
          <h4 className="text-xl font-bold">Leanne Goldsmith</h4>
          <button
            className="text-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
        <nav className={`${isOpen ? 'block bg-yellow-400' : 'hidden'}`}>
          <ul className="flex flex-col items-center mb-4">
            <li className="mb-4">
              <button onClick={() => handleLinkClick('work')} className="hover:text-white">Work</button>
            </li>
            <li className="mb-4">
              <button onClick={() => handleLinkClick('about')} className="hover:text-white">About</button>
            </li>
            <li className="mb-4">
              <button onClick={() => handleLinkClick('contact')} className="hover:text-white">Contact</button>
            </li>
          </ul>
          <div className="flex justify-center space-x-4 pb-5">
            <a href="https://github.com/LeanneCodes" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/leanne-m-goldsmith/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaLinkedin size={24} />
            </a>
          </div>
        </nav>
      </div>

      {/* Desktop Navbar */}
      <nav className="hidden md:flex md:flex-col md:items-center md:justify-between md:h-full bg-yellow-400">
        <ul className="flex flex-col justify-evenly items-center h-full space-y-0">
          <li className="md:transform md:rotate-90">
            <button onClick={() => handleLinkClick('work')} className="hover:text-white">Work</button>
          </li>
          <li className="md:transform md:rotate-90">
            <button onClick={() => handleLinkClick('about')} className="hover:text-white">About</button>
          </li>
          <li className="md:transform md:rotate-90">
            <button onClick={() => handleLinkClick('contact')} className="hover:text-white">Contact</button>
          </li>
        </ul>
        <div className="flex flex-col items-center space-y-4 pb-8">
          <a href="https://github.com/LeanneCodes" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/leanne-m-goldsmith/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaLinkedin size={24} />
          </a>
        </div>
      </nav>
    </div>
  );
}
