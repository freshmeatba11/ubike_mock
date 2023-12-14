import Image from "next/image";
import styled from "styled-components";

import Metrics from "@/theme/metrics";

import bikePng from "@/assets/images/bike.png";

const ImageWallWrapper = styled.div`
  display: flex;
`;
const ImageWrapper = styled.div`
  display: none;
  width: calc(100% - 513px);
  align-items: flex-end;

  img {
    width: 100%;
    object-fit: contain;
    display: block;
  }

  @media ${Metrics.media.desk} {
    display: flex;
  }
`;

export const ImageWall = ({ children }) => {
  return (
    <ImageWallWrapper>
      {children}

      <ImageWrapper>
        <Image src={bikePng} alt="bike" />
      </ImageWrapper>
    </ImageWallWrapper>
  );
};
