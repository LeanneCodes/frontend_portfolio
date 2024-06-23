'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import SlidingPanel from './SlidingPanel';
import Footer from './Footer';

export default function Layout({ children }) {
  const [panelContent, setPanelContent] = useState('');

  const closePanel = () => {
    setPanelContent('');
  };

  const animationVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar setPanelContent={setPanelContent} />
      <main className="flex-1 md:pr-16 bg-purple-500 text-white text-center flex items-center justify-center flex-col">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          className="text-4xl md:text-6xl font-bold"
        >
          Hi! I'm Leanne
        </motion.h1>
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          className='text-2xl hidden md:block top-[40px] left-[40px] absolute'
        >
          Frontend Portfolio
        </motion.h2>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          className="text-4xl md:text-4xl mt-4"
        >
          a frontend developer turning ideas into engaging digital experiences!
        </motion.p>
        <motion.a
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          href="/LeanneGoldsmith_CV.pdf"
          className="mt-6 text-lg md:text-xl text-white underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View My CV
        </motion.a>
      </main>
      {panelContent && (
        <SlidingPanel content={panelContent} closePanel={closePanel} />
      )}
      <Footer />
    </div>
  );
}
