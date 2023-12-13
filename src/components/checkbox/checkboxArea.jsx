import styled from "styled-components";

import { Checkbox } from "@/components/checkbox/checkbox";

const CheckboxFlex = styled.div`
  padding-top: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px 0;
  & > div {
    flex-shrink: 0;
    width: 33.3%;
  }
`;

export const CheckboxArea = ({ control, options }) => {
  return (
    <div>
      <Checkbox {...{ control, name: "all", label: "全部勾選" }} />
      <CheckboxFlex>
        {options.map((dist, index) => {
          return (
            <Checkbox {...{ control, name: dist, label: dist }} key={dist} />
          );
        })}
      </CheckboxFlex>
    </div>
  );
};
