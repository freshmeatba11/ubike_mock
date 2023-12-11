"use client";
import styled from "styled-components";

import Metrics from "@/theme/metrics";

import { CitySelect } from "@/components/selectInput/citySelect";

const Main = styled.main`
  background-color: #ffffff;
  width: 100svw;
  height: calc(100svh - 72px);

  @media ${Metrics.media.desk} {
    height: calc(100svh - 104px);
  }

  padding-inline: 32px;
  padding-top: 34px;
`;
const TitleText = styled.h2`
  font-size: 18px;
  color: var(--page-title-color);
  letter-spacing: 2.5px;
  margin-bottom: 16px;
`;

export default function Home() {
  return (
    <Main>
      <TitleText>站點資訊</TitleText>
      <div>
        {/* //todo: 縣市 */}
        <CitySelect />
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
