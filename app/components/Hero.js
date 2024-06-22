"use client";

import { motion } from 'framer-motion';
import styled from 'styled-components';

const Hero = () => {
  return (
    <HeroSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <HeroContent>
        <h1>Hello, I'm [Your Name]</h1>
        <p>I'm a Frontend Developer specializing in building (and occasionally designing) exceptional digital experiences.</p>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;

const HeroSection = styled(motion.section)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0070f3, #1a1a1a);
  color: #fff;
`;

const HeroContent = styled.div`
  text-align: center;

  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.2rem;
    margin-top: 1rem;
  }
`;
