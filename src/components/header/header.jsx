"use client";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

import { MenuButton } from "./menuButton";
import { MenuNav } from "./menuNav";

import CloseSvg from "@/assets/images/icons/close_24px.svg";
import MenuSvg from "@/assets/images/icons/menu_24px.svg";
import LogoPng from "@/assets/images/logo_180x180.png";

const HeaderWrapper = styled.header`
  width: 100%;
  height: 72px;
  padding-inline: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--header-border-color);
  position: relative;
  background: var(--header-background);

  img {
    margin-top: 7px;
  }
`;

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => setIsMenuOpen((prev) => !prev);

  return (
    <HeaderWrapper>
      <Image src={LogoPng} alt="logo" width={65} height={65} />

      {isMenuOpen && <MenuNav setIsMenuOpen={setIsMenuOpen} />}

      <MenuButton onClick={handleMenuClick}>
        {isMenuOpen ? <CloseSvg /> : <MenuSvg />}
      </MenuButton>
    </HeaderWrapper>
  );
};
