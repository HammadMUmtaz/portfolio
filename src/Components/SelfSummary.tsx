import React from "react";
import { styled } from "styled-components";
import { PersonalInfo } from "../data";
import { Column, Row } from "../Styles/StyledComponents";
import LogoButton from "./LogoButton";

const Container = styled(Column)`
  gap: 12px;
`;

const TopRow = styled(Row)`
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  align-items: flex-start;
`;

const NameBlock = styled(Column)`
  gap: 6px;
`;

const Prefix = styled.span`
  font-family: 'ZenDots', monospace;
  font-size: 0.78rem;
  color: #39d353;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const Name = styled.h1`
  margin: 0;
  font-family: 'PhoenixGaming', sans-serif;
  font-size: 2.6rem;
  color: #f0f0f0;
  line-height: 1;
  letter-spacing: 0.03em;

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

const RoleTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'ZenDots', monospace;
  font-size: 0.72rem;
  color: #39d353;
  border: 1px solid #39d353;
  border-radius: 4px;
  padding: 3px 10px;
  width: fit-content;
  letter-spacing: 0.08em;

  &::before {
    content: '▸';
  }
`;

const SocialRow = styled(Row)`
  gap: 4px;
  align-items: center;

  @media (max-width: 480px) {
    gap: 2px;
  }
`;

const Intro = styled.p`
  margin: 0;
  font-size: 0.95rem;
  color: #888;
  line-height: 1.7;
  max-width: 680px;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const Logo = styled.img`
  height: 52px;
  width: 52px;
  border-radius: 8px;
  margin-right: 14px;
  object-fit: cover;
  border: 1px solid #1e1e1e;

  @media (max-width: 768px) {
    height: 38px;
    width: 38px;
    margin-right: 10px;
  }
`;

const SelfSummary: React.FC = () => {
  return (
    <Container>
      <TopRow>
        <Row style={{ alignItems: 'flex-start' }}>
          <Logo src={`${process.env.PUBLIC_URL}/favicon.ico`} />
          <NameBlock>
            <Prefix>// portfolio</Prefix>
            <Name>{PersonalInfo.name}</Name>
            <RoleTag>{PersonalInfo.role}</RoleTag>
          </NameBlock>
        </Row>
        <SocialRow>
          <LogoButton source="/images/logos/github.png" size={52} margin={4} linkTo={PersonalInfo.links.github} />
          <LogoButton source="/images/logos/linkedIn.png" size={52} margin={4} linkTo={PersonalInfo.links.linkedIn} />
          <LogoButton source="/images/logos/itch.io.png" size={52} margin={4} linkTo={PersonalInfo.links.itchIO} />
        </SocialRow>
      </TopRow>
      <Intro>{PersonalInfo.introduction}</Intro>
    </Container>
  );
};

export default SelfSummary;
