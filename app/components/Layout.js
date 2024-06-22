"use client"

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
      <main className="flex-1 md:pr-16 bg-purple-500 text-white text-center flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold">Hi! We Are Studio Bagaz'</h1>
      </main>
      {panelContent && (
        <SlidingPanel content={panelContent} closePanel={closePanel} />
      )}
      <Footer />
    </div>
  );
}
