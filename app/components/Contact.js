"use client";

import styled from 'styled-components';

const Contact = () => {
  return (
    <ContactSection id="contact">
      <h2>Contact Me</h2>
      <p>If you'd like to get in touch, feel free to reach out through any of the platforms below.</p>
      <ContactLinks>
        <ContactLink href="mailto:youremail@example.com">Email</ContactLink>
        <ContactLink href="#" target="_blank" rel="noopener noreferrer">LinkedIn</ContactLink>
        <ContactLink href="#" target="_blank" rel="noopener noreferrer">GitHub</ContactLink>
      </ContactLinks>
    </ContactSection>
  );
};

export default Contact;

const ContactSection = styled.section`
  padding: 2rem 1rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: #fff;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
    font-size: 2rem;
  }

  p {
    margin-bottom: 1rem;
  }
`;

const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const ContactLink = styled.a`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
