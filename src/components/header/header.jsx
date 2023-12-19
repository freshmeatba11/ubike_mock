"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

import Metrics from "@/theme/metrics";

import CloseSvg from "@/assets/images/icons/close_24px.svg";
import MenuSvg from "@/assets/images/icons/menu_24px.svg";
import LogoPng from "@/assets/images/logo_180x180.png";
import { MenuButton } from "./menuButton";
import { MenuNav } from "./menuNav";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 72px;
  background: var(--header-background);
  padding-inline: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 99999;
  user-select: none;

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
  z-index: 99999;
  position: fixed;
  top: 72px;
  width: 100%;

  border-bottom: 1px solid var(--header-border-color);
  border-inline-width: 0px;
  border-top: 0px;

  @media ${Metrics.media.desk} {
    top: 104px;
  }
`;

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      <HeaderWrapper>
        <Link href={"/"}>
          <Image
            src={LogoPng}
            width={65}
            height={65}
            alt="YouBike 微笑單車 logo，點擊可回到首頁"
          />
        </Link>

        <MenuNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        <MenuButton onClick={handleMenuClick}>
          {isMenuOpen ? <CloseSvg /> : <MenuSvg />}
        </MenuButton>
      </HeaderWrapper>
      <HeaderDivider />
    </>
  );
};
