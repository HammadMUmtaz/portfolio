import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: #333;
  height: 48px;
  padding: 0 20px;
  font-size: 0.75rem;
  border-top: 1px solid #1a1a1a;
  font-family: 'Oxanium', monospace;

  a {
    color: #39d353;
    &:hover { color: #57e870; }
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <span>Template by</span>
      <a href="https://solilius.github.io/portfolio/#/about-me" target="_blank" rel="noreferrer">Sol Elan</a>
      <span>·</span>
      <a href="https://github.com/solilius/portfolio-template" target="_blank" rel="noreferrer">Free template ↗</a>
    </FooterContainer>
  );
};

export default Footer;
