import React, { useRef, useState } from "react";
import { styled } from "styled-components";
import BigMedia from "./BigMedia";
import { MediaItem, MediaType } from "../types";
import { Column, Row } from "../Styles/StyledComponents";

const GameMediaContainer = styled(Column)`
  gap: 10px;
`;

const LargeMediaWrapper = styled.div<{ $isFading: boolean }>`
  width: 100%;
  height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
  background: #111;
  border: 1px solid #1e1e1e;
  opacity: ${({ $isFading }) => ($isFading ? 0 : 1)};
  transition: opacity 0.2s ease-in-out;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const ThumbnailContainer = styled(Row)`
  gap: 8px;
  align-items: center;
`;

const Thumbnails = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  flex: 1;
  padding: 4px 0;

  &::-webkit-scrollbar { height: 3px; }
  &::-webkit-scrollbar-thumb { background: #39d353; border-radius: 4px; }
`;

const ThumbnailWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const Thumbnail = styled.img<{ $isSelected: boolean }>`
  width: 72px;
  height: 50px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 5px;
  border: 2px solid ${({ $isSelected }) => ($isSelected ? "#39d353" : "#1e1e1e")};
  opacity: ${({ $isSelected }) => ($isSelected ? 1 : 0.6)};
  transition: border-color 0.15s, opacity 0.15s;

  &:hover {
    opacity: 1;
    border-color: #39d353;
  }

  @media (max-width: 768px) {
    width: 58px;
    height: 40px;
  }
`;

const PlayIcon = styled.button`
  position: absolute;
  width: 28px;
  height: 28px;
  background: rgba(0,0,0,0.75);
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  cursor: pointer;
  pointer-events: none;

  &::before {
    content: "▶";
    margin-left: 2px;
  }
`;

const ArrowBtn = styled.button`
  background: #111;
  border: 1px solid #1e1e1e;
  color: #888;
  cursor: pointer;
  font-size: 14px;
  border-radius: 6px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: color 0.2s, border-color 0.2s;

  &:hover {
    color: #39d353;
    border-color: #39d353;
  }
`;

type GameMediaProps = {
  media: MediaItem[];
};

const getYouTubeThumbnail = (url: string) => {
  const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^&?/]+)/);
  return match && match[1]
    ? `https://img.youtube.com/vi/${match[1]}/mqdefault.jpg`
    : "/fallback-thumbnail.jpg";
};

const GameMedia: React.FC<GameMediaProps> = ({ media }) => {
  const thumbnailsContainerRef = useRef<HTMLDivElement | null>(null);
  const thumbnailRefs = useRef<(HTMLImageElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const updateMediaIndex = (newIndex: number) => {
    if (newIndex !== currentIndex) {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex(newIndex);
        setIsFading(false);
        thumbnailRefs.current[newIndex]?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 150);
    }
  };

  const nextMedia = () => updateMediaIndex((currentIndex + 1) % media.length);
  const prevMedia = () => updateMediaIndex((currentIndex - 1 + media.length) % media.length);

  return (
    <GameMediaContainer>
      <LargeMediaWrapper $isFading={isFading}>
        <BigMedia source={media[currentIndex].source} type={media[currentIndex].type} />
      </LargeMediaWrapper>
      <ThumbnailContainer>
        <ArrowBtn onClick={prevMedia}>◀</ArrowBtn>
        <Thumbnails ref={thumbnailsContainerRef}>
          {media.map((item, index) => {
            const isYouTube = item.type === MediaType.YouTube;
            const src = isYouTube
              ? getYouTubeThumbnail(item.source)
              : `${process.env.PUBLIC_URL}${item.source}`;
            return (
              <ThumbnailWrapper key={index}>
                <Thumbnail
                  ref={(el) => (thumbnailRefs.current[index] = el)}
                  src={src}
                  $isSelected={index === currentIndex}
                  onClick={() => updateMediaIndex(index)}
                />
                {isYouTube && <PlayIcon />}
              </ThumbnailWrapper>
            );
          })}
        </Thumbnails>
        <ArrowBtn onClick={nextMedia}>▶</ArrowBtn>
      </ThumbnailContainer>
    </GameMediaContainer>
  );
};

export default GameMedia;
