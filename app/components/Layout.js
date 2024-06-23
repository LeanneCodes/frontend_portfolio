'use client';

import { useState } from 'react';
import Navbar from './Navbar';
import SlidingPanel from './SlidingPanel';
import Footer from './Footer';

export default function Layout({ children }) {
  const [panelContent, setPanelContent] = useState('');

  const closePanel = () => {
    setPanelContent('');
  };

  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar setPanelContent={setPanelContent} />
      <main className="flex-1 md:pr-16 bg-purple-500 text-white text-center flex items-center justify-center flex-col">
        <h1 className="text-4xl md:text-6xl font-bold">Hi! I'm Leanne</h1>
        <h2 className='text-2xl hidden md:block top-[40px] left-[40px] absolute'>Leanne Goldsmith</h2>
        <p className="text-4xl md:text-4xl mt-4">a frontend developer turning ideas into engaging digital experiences!</p>
      </main>
      {panelContent && (
        <SlidingPanel content={panelContent} closePanel={closePanel} />
      )}
      <Footer />
    </div>
  );
}
