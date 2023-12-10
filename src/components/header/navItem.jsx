import Link from "next/link";
import styled from "styled-components";

import Metrics from "@/theme/metrics";

const NavItemWrapper = styled.li`
  width: 82px;
  a {
    text-decoration: none;
    p {
      color: var(--header-text);
      font-size: 18px;
      letter-spacing: 2.5px;
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
  @media ${Metrics.media.desk} {
    --header-text: var(--green-02);
    --header-text-active: var(--green-01);

    width: 72px;
    a p {
      letter-spacing: 0;
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
