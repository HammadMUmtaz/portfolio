import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { PersonalInfo } from "../data";
import { Column, Row } from "../Styles/StyledComponents";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const rotateBorder = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

const glowPulse = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(168,85,247,0.5), 0 0 40px rgba(168,85,247,0.2); }
  50%       { box-shadow: 0 0 30px rgba(6,182,212,0.5), 0 0 60px rgba(6,182,212,0.2); }
`;

const Container = styled(Column)`
  align-items: center;
  margin-top: 40px;
  gap: 30px;
  text-align: center;
  animation: ${fadeInUp} 0.7s ease both;
`;

const ProfileWrapper = styled.div`
  position: relative;
  width: 170px;
  height: 170px;

  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    background: linear-gradient(135deg, #a855f7, #06b6d4, #a855f7);
    animation: ${rotateBorder} 3s linear infinite;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    inset: -8px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(168,85,247,0.2), rgba(6,182,212,0.2));
    animation: ${rotateBorder} 3s linear infinite reverse;
    z-index: 0;
  }
`;

const ProfileImage = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  position: relative;
  z-index: 1;
  border: 4px solid #0a0a0f;
  animation: ${glowPulse} 3s ease-in-out infinite;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

const Card = styled.div`
  background: rgba(10, 10, 15, 0.8);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(168,85,247,0.2);
  border-radius: 16px;
  padding: 30px 40px;
  max-width: 750px;
  width: 90%;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:hover {
    border-color: rgba(168,85,247,0.5);
    box-shadow: 0 0 30px rgba(168,85,247,0.1);
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const AboutText = styled.p`
  line-height: 1.8;
  margin: 0;
  color: #94a3b8;
  font-size: 1rem;
  white-space: pre-line;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 0.88rem;
  }
`;

const CVButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 36px;
  font-size: 1rem;
  font-family: 'ZenDots', sans-serif;
  color: white;
  background: linear-gradient(135deg, #a855f7, #06b6d4);
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s ease;
  box-shadow: 0 0 20px rgba(168,85,247,0.3);
  letter-spacing: 0.05em;

  &:hover {
    transform: translateY(-3px) scale(1.04);
    box-shadow: 0 0 35px rgba(168,85,247,0.6);
    color: white;
    text-shadow: none;
  }

  &:active { transform: scale(0.97); }
`;

const AboutMe: React.FC = () => {
  return (
    <Container>
      <ProfileWrapper>
        <ProfileImage src={PersonalInfo.image} alt={PersonalInfo.name} />
      </ProfileWrapper>
      <Card>
        <AboutText>{PersonalInfo.description}</AboutText>
      </Card>
      <CVButton href={`${PersonalInfo.cvUri}`} download>
        ⬇ Download My CV
      </CVButton>
    </Container>
  );
};

export default AboutMe;
