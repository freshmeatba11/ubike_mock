import { usePathname } from "next/navigation";
import styled from "styled-components";

import MenuNavList from "@/constants/menuNavList.json";
import { LoginButton } from "./loginButton";
import { NavItem } from "./navItem";

const MenuWrapper = styled.div`
  background: var(--header-nav-background);
  width: 100%;
  height: calc(100svh - 72px);
  position: absolute;
  top: 72px;
  left: 0;
  padding: 32px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`;

export const MenuNav = ({ setIsMenuOpen }) => {
  const pathname = usePathname();

  const handleClick = () => setIsMenuOpen(false);

  return (
    <MenuWrapper>
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
