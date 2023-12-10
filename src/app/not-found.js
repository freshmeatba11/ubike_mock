"use client";
import styled from "styled-components";
import Link from "next/link";

import Styles from "@/theme/styles";

const Wrapper = styled(Styles.main())`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 18px;
  }
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function NotFound() {
  return (
    <Wrapper>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        <Link href="/">Return 站點資訊</Link>
      </p>
    </Wrapper>
  );
}
