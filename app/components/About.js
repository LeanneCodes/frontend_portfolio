"use client";

import styled from 'styled-components';

const About = () => {
  return (
    <AboutSection id="about">
      <h2>About Me</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
    </AboutSection>
  );
};

export default About;

const AboutSection = styled.section`
  padding: 2rem 1rem;
  background-color: ${({ theme }) => theme.colors.light};
  text-align: center;

  h2 {
    margin-bottom: 1rem;
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
  }
`;
