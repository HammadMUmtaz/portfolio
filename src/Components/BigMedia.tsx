import React, { useState } from "react";
import { styled } from "styled-components";
import { MediaItem, MediaType } from "../types";
import { Row } from "../Styles/StyledComponents";

const MediaWrapper = styled(Row)`
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const MediaIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const MediaImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
`;

const PopupImage = styled.img`
  max-width: 88%;
  max-height: 88%;
  border-radius: 6px;
  border: 1px solid #1e1e1e;
`;

const BigMedia: React.FC<MediaItem> = ({ source, type }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <MediaWrapper onClick={() => type === MediaType.Image && setIsPopupOpen(true)}>
        {type === MediaType.YouTube ? (
          <MediaIframe
            src={`${source}?autoplay=1&mute=1`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <MediaImage src={`${process.env.PUBLIC_URL}${source}`} alt="Game Media" />
        )}
      </MediaWrapper>
      {isPopupOpen && (
        <PopupOverlay onClick={() => setIsPopupOpen(false)}>
          <PopupImage src={`${process.env.PUBLIC_URL}${source}`} alt="Enlarged" />
        </PopupOverlay>
      )}
    </>
  );
};

export default BigMedia;
