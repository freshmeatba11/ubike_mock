import React from "react";
import styled from "styled-components";
import { components } from "react-select";

import ArrowDownSvg from "@/assets/images/icons/icon.svg";
import { SelectInput } from "./selectInput";

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <ArrowDownSvg />
    </components.DropdownIndicator>
  );
};

export const StationSelect = ({ control, options }) => {
  const config = {
    id: "station",
    placeholder: "搜尋站點",
    options: options,
    styles: {},
    components: { DropdownIndicator, IndicatorSeparator: null },
    classname: "station",
  };

  return <SelectInput {...config} control={control} />;
};
