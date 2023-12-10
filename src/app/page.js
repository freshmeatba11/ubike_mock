"use client";
import styled from "styled-components";

import Metrics from "@/theme/metrics";

const Main = styled.main`
  background-color: #ffffff;
  width: 100svw;
  height: calc(100svh - 72px);

  @media ${Metrics.media.desk} {
    height: calc(100svh - 104px);
  }
`;

export default function Home() {
  return <Main>hi</Main>;
}
