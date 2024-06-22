'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-0 top-0 h-full text-black w-full md:w-16 z-10">
      <div className="flex justify-between items-center p-4 bg-yellow-400 md:hidden">
        <span className="text-xl font-bold">Studio Bagaz'</span>
        <button
          className="text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
      <nav className={`bg-yellow-400 ${isOpen ? 'block' : 'hidden'} md:flex md:flex-col md:items-center md:justify-between md:h-full`}>
        <ul className="flex flex-col justify-evenly items-center h-full space-y-4 md:space-y-0">
          <li className="md:transform md:rotate-90">
            <a href="#work" className="hover:text-white">Work</a>
          </li>
          <li className="md:transform md:rotate-90">
            <a href="#about" className="hover:text-white">About</a>
          </li>
          <li className="md:transform md:rotate-90">
            <a href="#contact" className="hover:text-white">Contact</a>
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
