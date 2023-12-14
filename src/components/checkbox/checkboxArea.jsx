import styled from "styled-components";

import Metrics from "@/theme/metrics";
import { Checkbox } from "@/components/checkbox/checkbox";

const CheckboxAreaWrapper = styled.div`
  padding-top: 16px;

  @media ${Metrics.media.desk} {
    width: 513px;
    padding-top: 24px;
  }
`;
const CheckboxFlex = styled.div`
  padding-top: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px 15px;
  justify-content: space-between;
  & > div {
    flex-shrink: 0;
  }

  @media ${Metrics.media.desk} {
    gap: 15px 24px;
  }
`;

export const CheckboxArea = ({
  control,
  options,
  handleChangeSelectAll,
  handleSelectAllOnClick,
  disabled,
}) => {
  return (
    <CheckboxAreaWrapper>
      <Checkbox
        {...{
          control,
          name: `form_dist.all`,
          label: "全部勾選",
          defaultValue: true,
          handleSelectAllOnClick,
          disabled,
        }}
      />
      <CheckboxFlex>
        {options.map((dist, index) => {
          return (
            <Checkbox
              {...{
                control,
                name: `form_dist.${dist}`,
                label: dist,
                handleChangeSelectAll,
                disabled,
              }}
              key={dist}
            />
          );
        })}
      </CheckboxFlex>
    </CheckboxAreaWrapper>
  );
};
