import Select from "react-select";

export const SelectInput = ({
  id,
  placeholder,
  options,
  styles,
  components,
  ...config
}) => {
  const selectConfig = {
    id,
    instanceId: id,
    placeholder,
    options,
    closeMenuOnSelect: true,
    escapeClearsValue: true,
    isClearable: true,
    isSearchable: true,
    isLoading: false,
    styles: {
      control: (baseStyles, state) => ({
        ...baseStyles,
        backgroundColor: "var(--input-background-color)",
        borderColor: "var(--input-background-color)",
        borderRadius: "8px",
      }),
      singleValue: (baseStyles, state) => ({
        ...baseStyles,
        color: "var(--input-text-color)",
      }),
      placeholder: (baseStyles, state) => ({
        ...baseStyles,
        color: "var(--input-placeholder-color)",
      }),
      valueContainer: (baseStyles, state) => ({
        ...baseStyles,
        padding: "8px 16px",
        fontSize: "18px",
        fontWeight: "500",
        letterSpacing: "0.1px",
      }),
      menu: (baseStyles, state) => ({
        ...baseStyles,
        backgroundColor: "var(--input-background-color)",
        padding: "16px",
        borderColor: "var(--input-background-color)",
        boxShadow: "none",
        borderRadius: "8px",
      }),
      menuList: (baseStyles, state) => ({
        ...baseStyles,
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }),
      option: (baseStyles, state) => ({
        ...baseStyles,
        fontSize: "18px",
        fontWeight: "400",
        letterSpacing: "0.1px",
        color: state.isSelected
          ? "var(--input-text-selected-color)"
          : "var(--input-text-color)",
        backgroundColor: "var(--input-background-color)",
        padding: 0,
        cursor: "pointer",
        ":hover": { color: "var(--input-text-selected-color)" },
      }),
      ...styles,
    },
    components: { IndicatorSeparator: null, ...components },
    ...config,
  };

  return <Select {...selectConfig} />;
};
