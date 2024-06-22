"use client";

import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Your Name. All Rights Reserved.</p>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: #fff;
  text-align: center;
`;
