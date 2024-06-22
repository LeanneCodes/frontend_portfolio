import { useState, useEffect } from 'react';
import WorkContent from './WorkContent';
import AboutContent from './AboutContent';
import ContactContent from './ContactContent';

export default function SlidingPanel({ content, closePanel }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (content) {
      setIsVisible(true);
    }
  }, [content]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      closePanel();
    }, 300); // Delay to allow the sliding animation to complete
  };

  return (
    <div
      className={`fixed z-20 transform transition-transform duration-300 ${
        isVisible ? 'translate-x-0' : 'translate-x-full'
      } md:w-9/12 w-full h-full top-0 right-0 bg-white`}
    >
      <div className="flex justify-end p-4">
        <button onClick={handleClose} className="text-xl">✖</button>
      </div>
      <div className="p-8">
        {content === 'work' && <WorkContent />}
        {content === 'about' && <AboutContent />}
        {content === 'contact' && <ContactContent />}
      </div>
    </div>
  );
}
