import { components } from "react-select";

import CityList from "@/constants/city.json";

import ArrowDownSvg from "@/assets/images/icons/icon.svg";
import { SelectInput } from "./selectInput";

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <ArrowDownSvg />
    </components.DropdownIndicator>
  );
};

const options = CityList.map((i) => ({ value: i.value, label: i.label }));
const config = {
  id: "city",
  placeholder: "選擇縣市",
  options: options,
  styles: {},
  components: { DropdownIndicator, IndicatorSeparator: null },
  classname: "city",
};
export const CitySelect = ({ control }) => {
  return <SelectInput {...config} control={control} />;
};
