'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-0 top-0 h-full bg-yellow-400 text-black w-full md:w-16">
      <div className="flex justify-between items-center p-4 md:hidden">
        <span className="text-xl font-bold">Studio Bagaz'</span>
        <button
          className="text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
      <nav className={`${isOpen ? 'block' : 'hidden'} md:flex md:flex-col md:items-center md:justify-center md:h-full`}>
        <ul className="flex flex-col justify-center items-center h-full md:space-y-8 space-y-4">
          <li className="py-2 md:py-0">
            <a href="#work" className="md:transform md:rotate-90 md:origin-right hover:text-white">Work</a>
          </li>
          <li className="py-2 md:py-0">
            <a href="#about" className="md:transform md:rotate-90 md:origin-right hover:text-white">About</a>
          </li>
          <li className="py-2 md:py-0">
            <a href="#contact" className="md:transform md:rotate-90 md:origin-right hover:text-white">Contact</a>
          </li>
        </ul>
        <ul className="flex flex-col justify-center items-center md:mt-auto md:mb-4 space-y-4">
          <li>
            <a href="#" className="md:transform md:rotate-90 md:origin-right hover:text-white">fb</a>
          </li>
          <li>
            <a href="#" className="md:transform md:rotate-90 md:origin-right hover:text-white">ig</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
