"use client";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

import Metrics from "@/theme/metrics";

import CloseSvg from "@/assets/images/icons/close_24px.svg";
import MenuSvg from "@/assets/images/icons/menu_24px.svg";
import LogoPng from "@/assets/images/logo_180x180.png";
import { MenuButton } from "./menuButton";
import { MenuNav } from "./menuNav";

const HeaderWrapper = styled.header`
  width: 100%;
  height: 72px;
  padding-inline: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background: var(--header-background);
  z-index: 99999;

  img {
    margin-top: 7px;
  }
  @media ${Metrics.media.desk} {
    max-width: 1192px;
    height: 104px;
    margin: 0 auto;
    justify-content: flex-start;
    gap: 60px;

    img {
      margin-top: 6px;
      width: 95px;
      height: 95px;
    }
  }
`;
const HeaderDivider = styled.hr`
  border-bottom: 1px solid var(--header-border-color);
  border-top: 0px;
`;

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      <HeaderWrapper>
        <Image src={LogoPng} alt="logo" width={65} height={65} />

        <MenuNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        <MenuButton onClick={handleMenuClick}>
          {isMenuOpen ? <CloseSvg /> : <MenuSvg />}
        </MenuButton>
      </HeaderWrapper>
      <HeaderDivider />
    </>
  );
};
