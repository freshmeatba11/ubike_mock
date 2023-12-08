"use client";
import styles from "./page.module.css";

import styled from "styled-components";

const Main = styled.main`
  background-color: #ffffff;
  width: 100svw;
  height: calc(100svh - 72px);
`;

export default function Home() {
  return <Main>hi</Main>;
}
