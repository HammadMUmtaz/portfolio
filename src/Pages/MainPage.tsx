import React, { useEffect, useRef, useState } from "react";
import { styled, keyframes } from "styled-components";
import Game from "../Components/Game";
import { games } from "../data";
import { Column } from "../Styles/StyledComponents";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const GamesContainer = styled(Column)`
  gap: 80px;
  padding: 20px 0;

  @media (max-width: 768px) {
    gap: 40px;
  }
`;

const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(168,85,247,0.4), rgba(6,182,212,0.4), transparent);
`;

const AnimatedGame = styled.div<{ $delay: number }>`
  animation: ${fadeInUp} 0.7s ease ${p => p.$delay}s both;
`;

const MainPage: React.FC = () => (
  <GamesContainer>
    {games.map((game, index) => (
      <React.Fragment key={index}>
        <AnimatedGame $delay={index * 0.15}>
          <Game game={game} />
        </AnimatedGame>
        {index !== games.length - 1 && <Separator />}
      </React.Fragment>
    ))}
  </GamesContainer>
);

export default MainPage;
