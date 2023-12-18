import { usePathname } from "next/navigation";
import styled from "styled-components";

import MenuNavList from "@/constants/menuNavList.json";
import Metrics from "@/theme/metrics";

import { LoginButton } from "./loginButton";
import { NavItem } from "./navItem";

const MenuWrapper = styled.div`
  width: 100%;
  height: calc(100svh - 73px);
  background: var(--header-nav-background);
  padding: 32px;

  position: absolute;
  top: 73px;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  &.disable {
    display: none;
  }
  @media ${Metrics.media.desk} {
    --header-nav-background: transparent;

    width: min-content;
    height: 100%;
    padding: 0;

    position: static;
    flex-direction: row;
    align-items: center;
    flex-grow: 1;
    ul {
      flex-direction: row;
      gap: 40px;
    }

    &.disable {
      display: flex;
    }
  }
`;

export const MenuNav = ({ isMenuOpen, setIsMenuOpen }) => {
  const pathname = usePathname();

  const handleClick = () => setIsMenuOpen(false);

  return (
    <MenuWrapper className={isMenuOpen ? "" : "disable"}>
      <ul>
        {MenuNavList.map((item, i) => (
          <NavItem
            text={item.text}
            url={item.url}
            onClick={handleClick}
            active={pathname === item.url}
            key={i}
          />
        ))}
      </ul>

      <LoginButton />
    </MenuWrapper>
  );
};
