import React, { useEffect, useState } from "react";
import { styled, keyframes } from "styled-components";
import { PersonalInfo } from "../data";
import { Column, Row } from "../Styles/StyledComponents";
import LogoButton from "./LogoButton";

const glowPulse = keyframes`
  0%, 100% { text-shadow: 0 0 10px #a855f7, 0 0 20px #a855f7, 0 0 40px #a855f7; }
  50%       { text-shadow: 0 0 20px #06b6d4, 0 0 40px #06b6d4, 0 0 80px #06b6d4; }
`;

const fadeInDown = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const borderAnim = keyframes`
  0%, 100% { border-color: rgba(168,85,247,0.4); }
  50%       { border-color: rgba(6,182,212,0.4); }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
`;

const SelfSummaryContainer = styled(Column)`
  background: rgba(10, 10, 15, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(168,85,247,0.2);
  border-radius: 16px;
  padding: 30px 40px;
  animation: ${borderAnim} 4s ease-in-out infinite, ${fadeInDown} 0.8s ease both;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const TopRow = styled(Row)`
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
`;

const Title = styled.div`
  font-size: 2.8em;
  font-family: "PhoenixGaming", sans-serif;
  background: linear-gradient(135deg, #a855f7, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${glowPulse} 3s ease-in-out infinite;
  filter: drop-shadow(0 0 15px rgba(168,85,247,0.4));

  @media (max-width: 768px) {
    font-size: 1.4em;
  }
`;

const RoleTag = styled.div`
  font-family: 'ZenDots', sans-serif;
  font-size: 0.75rem;
  color: #06b6d4;
  border: 1px solid rgba(6,182,212,0.4);
  border-radius: 20px;
  padding: 4px 14px;
  margin-top: 6px;
  width: fit-content;
  letter-spacing: 0.1em;
  background: rgba(6,182,212,0.05);
`;

const Description = styled.p`
  font-size: 1rem;
  max-width: 65vw;
  font-family: "Oxanium", sans-serif;
  margin: 16px 0 0 0;
  color: #94a3b8;
  line-height: 1.7;
  animation: ${fadeInUp} 1s ease 0.3s both;

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 0.85rem;
  }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 2px;
  height: 1em;
  background: #a855f7;
  margin-left: 2px;
  vertical-align: middle;
  animation: ${blink} 1s step-end infinite;
`;

const Logo = styled.img`
  height: 70px;
  margin-right: 12px;
  filter: drop-shadow(0 0 10px rgba(168,85,247,0.6));
  transition: transform 0.3s ease;

  &:hover { transform: scale(1.1) rotate(5deg); }

  @media (max-width: 768px) {
    height: 40px;
  }
`;

const SocialRow = styled(Row)`
  gap: 4px;
`;

const SelfSummary: React.FC = () => {
  const [displayed, setDisplayed] = useState("");
  const fullText = PersonalInfo.introduction;

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayed(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 18);
    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <SelfSummaryContainer>
      <TopRow>
        <Row>
          <Logo src={`${process.env.PUBLIC_URL}/favicon.ico`} />
          <Column>
            <Title>{PersonalInfo.name}</Title>
            <RoleTag>⚡ {PersonalInfo.role}</RoleTag>
          </Column>
        </Row>
        <SocialRow>
          <LogoButton source="/images/logos/github.png" size={60} margin={8} linkTo={PersonalInfo.links.github} />
          <LogoButton source="/images/logos/linkedIn.png" size={60} margin={8} linkTo={PersonalInfo.links.linkedIn} />
          <LogoButton source="/images/logos/itch.io.png" size={60} margin={8} linkTo={PersonalInfo.links.itchIO} />
        </SocialRow>
      </TopRow>
      <Description>
        {displayed}
        <Cursor />
      </Description>
    </SelfSummaryContainer>
  );
};

export default SelfSummary;
