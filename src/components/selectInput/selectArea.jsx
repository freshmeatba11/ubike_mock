import React from "react";
import styled from "styled-components";

import Metrics from "@/theme/metrics";

import { StationSelect } from "@/components/selectInput/stationSelect";
import { CitySelect } from "@/components/selectInput/citySelect";

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media ${Metrics.media.desk} {
    flex-direction: row-reverse;
    justify-content: flex-end;
    gap: 16px;
  }
`;

export const SelectArea = ({ control, options }) => {
  return (
    <SelectWrapper>
      <StationSelect {...{ control, options }} />
      <CitySelect {...{ control }} />
    </SelectWrapper>
  );
};
