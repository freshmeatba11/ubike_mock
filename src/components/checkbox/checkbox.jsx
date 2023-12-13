import MuiCheckbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Controller } from "react-hook-form";
import styled from "styled-components";

const Wrapper = styled.div``;
export const Checkbox = ({ control, name, label }) => {
  return (
    <Controller
      control={control}
      name={`dist.${name}`}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <Wrapper>
          <FormControlLabel
            sx={{
              margin: 0,
              gap: "5px",
              width: "100%",
              "& .MuiFormControlLabel-label": {
                fontSize: "16px",
                fontWeight: 400,
                color: "var(--checkbox-text-color)",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                width: "100%",
              },
            }}
            label={label}
            control={
              <MuiCheckbox
                {...{
                  onChange,
                  onBlur,
                  value,
                  ref,
                }}
                sx={{
                  padding: "8px",
                  color: "var(--checkbox-color)",
                  "&.Mui-checked": {
                    color: "var(--checkbox-checked-color)",
                  },
                  "& .MuiSvgIcon-root": { width: 24, height: 24 },
                }}
              />
            }
          />
        </Wrapper>
      )}
    />
  );
};
