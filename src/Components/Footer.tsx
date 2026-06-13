import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Row } from '../Styles/StyledComponents';

const shimmer = keyframes`
  0%, 100% { opacity: 0.5; }
  50%       { opacity: 1; }
`;

const FooterContainer = styled(Row)`
  align-items: center;
  justify-content: center;
  color: #4a5568;
  height: 50px;
  padding: 0 16px;
  font-size: 12px;
  gap: 6px;
  border-top: 1px solid rgba(168,85,247,0.15);
  background: rgba(10,10,15,0.9);
  backdrop-filter: blur(10px);
  animation: ${shimmer} 4s ease-in-out infinite;

  a {
    color: #a855f7;
    transition: color 0.3s;
    &:hover { color: #06b6d4; }
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>Template by</p>
      <a href="https://solilius.github.io/portfolio/#/about-me" target="_blank" rel="noreferrer">Sol Elan</a>
      <span>·</span>
      <a href="https://github.com/solilius/portfolio-template" target="_blank" rel="noreferrer">Free template ↗</a>
    </FooterContainer>
  );
};

export default Footer;
