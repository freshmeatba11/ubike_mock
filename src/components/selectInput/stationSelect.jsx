import React from "react";
import styled from "styled-components";
import { components } from "react-select";

import SearchSvg from "@/assets/images/icons/search_24px.svg";
import { SelectInput } from "./selectInput";

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <SearchSvg />
    </components.DropdownIndicator>
  );
};

export const StationSelect = ({ control, options, isLoading }) => {
  const config = {
    id: "station",
    placeholder: "搜尋站點",
    options: options,
    styles: {},
    components: { DropdownIndicator, IndicatorSeparator: null },
    classname: "station",
    isLoading,
    isDisabled: isLoading,
  };

  return <SelectInput {...config} control={control} />;
};
