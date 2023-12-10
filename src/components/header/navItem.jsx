import Link from "next/link";
import styled from "styled-components";

const NavItemWrapper = styled.li`
  width: 72px;
  a {
    text-decoration: none;
    p {
      color: var(--header-text);
      font-size: 18px;
      &:hover {
        color: var(--header-text-active);
      }
      &.active {
        color: var(--header-text-active);
      }
    }
  }
  &.active {
    a {
      p {
        color: var(--header-text-active);
      }
    }
  }
`;

export const NavItem = ({ text, url, onClick, active }) => {
  return (
    <NavItemWrapper className={active ? "active" : ""}>
      <Link href={url} onClick={onClick}>
        <p>{text}</p>
      </Link>
    </NavItemWrapper>
  );
};
