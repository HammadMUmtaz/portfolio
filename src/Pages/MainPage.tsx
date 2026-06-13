import React from "react";
import { styled } from "styled-components";
import Game from "../Components/Game";
import { games } from "../data";
import { Column } from "../Styles/StyledComponents";

const GamesContainer = styled(Column)`
  gap: 60px;

  @media (max-width: 768px) {
    gap: 40px;
  }
`;

const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: #1e1e1e;
`;

const MainPage: React.FC = () => (
  <GamesContainer>
    {games.map((game, index) => (
      <React.Fragment key={index}>
        <Game game={game} />
        {index !== games.length - 1 && <Separator />}
      </React.Fragment>
    ))}
  </GamesContainer>
);

export default MainPage;
