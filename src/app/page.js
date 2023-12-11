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
  return (
    <Main>
      <p>站點資訊</p>
      <div>
        {/* //todo: 縣市 */}
        {/* //todo: 站點 */}
      </div>
      <div>
        {/* //todo: checkbox */}
        {/* //todo: img */}
      </div>
      {/* //todo: table */}
    </Main>
  );
}
