'use client';

import { useState } from 'react';

export default function Navbar({ setPanelContent }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (content) => {
    setPanelContent(content);
    setIsOpen(false);
  };

  return (
    <div className="fixed right-0 top-0 h-full text-black w-full md:w-16 z-10 bg-yellow-400">
      <div className="flex justify-between items-center p-4 md:hidden">
        <span className="text-xl font-bold">Studio Bagaz'</span>
        <button
          className="text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
      <nav className={`${isOpen ? 'block bg-yellow-400' : 'hidden'} md:flex md:flex-col md:items-center md:justify-between md:h-full`}>
        <ul className="flex flex-col justify-evenly items-center h-full space-y-4 md:space-y-0">
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
        <ul className="flex flex-col items-center space-y-4 pb-4 md:pb-8">
          <li>
            <a href="#" className="hover:text-white">fb</a>
          </li>
          <li>
            <a href="#" className="hover:text-white">ig</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
