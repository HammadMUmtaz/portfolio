import React from "react";
import styled from "styled-components";
import { PersonalInfo } from "../data";
import { Column, Row } from "../Styles/StyledComponents";

const Container = styled(Column)`
  gap: 32px;
`;

const ProfileSection = styled(Row)`
  gap: 28px;
  align-items: flex-start;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const ProfileImage = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 10px;
  object-fit: cover;
  border: 2px solid #1e1e1e;
  flex-shrink: 0;

  @media (max-width: 600px) {
    width: 100px;
    height: 100px;
  }
`;

const InfoBlock = styled(Column)`
  gap: 10px;
  flex: 1;
  min-width: 200px;
`;

const Label = styled.span`
  font-family: 'ZenDots', monospace;
  font-size: 0.7rem;
  color: #39d353;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const BigName = styled.h2`
  margin: 0;
  font-family: 'PhoenixGaming', sans-serif;
  font-size: 1.9rem;
  color: #f0f0f0;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const RoleTag = styled.div`
  font-family: 'ZenDots', monospace;
  font-size: 0.7rem;
  color: #39d353;
  border: 1px solid #39d353;
  border-radius: 4px;
  padding: 3px 10px;
  width: fit-content;

  @media (max-width: 600px) {
    margin: 0 auto;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #1e1e1e;
`;

const SectionTitle = styled.h3`
  margin: 0 0 12px 0;
  font-family: 'ZenDots', monospace;
  font-size: 0.8rem;
  color: #39d353;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 8px;

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #1e1e1e;
  }
`;

const AboutText = styled.p`
  margin: 0;
  font-size: 0.95rem;
  color: #888;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 0.88rem;
  }
`;

const CVButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 26px;
  font-size: 0.85rem;
  font-family: 'ZenDots', monospace;
  color: #0d0d0d;
  background: #39d353;
  text-decoration: none;
  border-radius: 6px;
  letter-spacing: 0.06em;
  transition: background 0.2s, transform 0.15s;
  width: fit-content;

  &:hover {
    background: #57e870;
    color: #0d0d0d;
    transform: translateY(-1px);
    text-shadow: none;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const AboutMe: React.FC = () => {
  return (
    <Container>
      <ProfileSection>
        <ProfileImage src={PersonalInfo.image} alt={PersonalInfo.name} />
        <InfoBlock>
          <Label>// about me</Label>
          <BigName>{PersonalInfo.name}</BigName>
          <RoleTag>▸ {PersonalInfo.role}</RoleTag>
        </InfoBlock>
      </ProfileSection>

      <Divider />

      <div>
        <SectionTitle>Bio</SectionTitle>
        <AboutText>{PersonalInfo.description}</AboutText>
      </div>

      <CVButton href={`${PersonalInfo.cvUri}`} download>
        ↓ Download CV
      </CVButton>
    </Container>
  );
};

export default AboutMe;
