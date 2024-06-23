import { useState, useEffect, useRef } from 'react';
import WorkContent from './WorkContent';
import AboutContent from './AboutContent';
import ContactContent from './ContactContent';

export default function SlidingPanel({ content, closePanel }) {
  const [isVisible, setIsVisible] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    if (content) {
      setIsVisible(true);
    }
  }, [content]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        handleClose();
      }
    };

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      closePanel();
    }, 300); // Delay to allow the sliding animation to complete
  };

  const getContentComponent = () => {
    switch (content) {
      case 'work':
        return <WorkContent />;
      case 'about':
        return <AboutContent />;
      case 'contact':
        return <ContactContent />;
      default:
        return null;
    }
  };

  let panelClass = 'bg-white';
  let overflowClass = 'overflow-auto';

  if (content === 'about') {
    panelClass = 'bg-teal-500';
    overflowClass = 'overflow-auto';
  } else if (content === 'contact') {
    panelClass = 'bg-peach-500 overflow-hidden';
    overflowClass = 'overflow-auto';
  }

  return (
    <div className={`fixed inset-0 z-20 flex justify-end ${isVisible ? 'visible' : 'invisible'}`}>
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div
        ref={panelRef}
        className={`transform transition-transform duration-300 ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        } md:w-9/12 w-full h-full top-0 right-0 ${panelClass} ${overflowClass}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={handleClose} className="text-xl">✖</button>
        </div>
        <div className="p-8">{getContentComponent()}</div>
      </div>
    </div>
  );
}
