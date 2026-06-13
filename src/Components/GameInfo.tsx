import React from "react";
import { styled } from "styled-components";
import { Game as GameInterface } from "../types";
import LogoButton from "./LogoButton";
import { Column, Row } from "../Styles/StyledComponents";

interface GameInfoProps {
  game: GameInterface;
}

const GameInfoContainer = styled(Column)`
  gap: 12px;
  padding-right: 32px;

  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

const GameTitle = styled.h2`
  font-family: "ZenDots", monospace;
  font-size: 1.35rem;
  color: #f0f0f0;
  margin: 0;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const GameDescription = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #888;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const InfoTable = styled(Column)`
  gap: 6px;
  padding: 14px;
  background: #111;
  border: 1px solid #1e1e1e;
  border-radius: 8px;
`;

const InfoRow = styled(Row)`
  gap: 10px;
  align-items: baseline;
`;

const InfoKey = styled.span`
  font-family: 'ZenDots', monospace;
  font-size: 0.65rem;
  color: #39d353;
  min-width: 68px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

const InfoValue = styled.span`
  font-size: 0.85rem;
  color: #aaa;
`;

const LinksRow = styled(Row)`
  gap: 6px;
  flex-wrap: wrap;
`;

const GameInfo: React.FC<GameInfoProps> = ({ game }) => {
  return (
    <GameInfoContainer>
      <GameTitle>{game.name}</GameTitle>
      <GameDescription>{game.description}</GameDescription>
      <InfoTable>
        <InfoRow>
          <InfoKey>Genres</InfoKey>
          <InfoValue>{game.genres.join(", ")}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoKey>Platform</InfoKey>
          <InfoValue>{game.platforms.join(", ")}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoKey>Engine</InfoKey>
          <InfoValue>{game.engine}</InfoValue>
        </InfoRow>
        {game.source && (
          <InfoRow>
            <InfoKey>Source</InfoKey>
            <InfoValue>
              <a href={game.source.url} target="_blank" rel="noopener noreferrer">
                {game.source.name}
              </a>
            </InfoValue>
          </InfoRow>
        )}
      </InfoTable>
      <LinksRow>
        {game.links.map((link, index) => (
          <LogoButton key={index} size={34} source={link.source} linkTo={link.url} />
        ))}
      </LinksRow>
    </GameInfoContainer>
  );
};

export default GameInfo;
