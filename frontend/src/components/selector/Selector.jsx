import React from "react";
import { useSelect } from "../../hooks";
import { MainWrapper } from "./selector.styles";

export const Selector = ({
  options: initOptions,
  label,
  getSelectedValue,
  ...others
}) => {
  const [
    { isOpen, options, selectedValue, listRef },
    {
      handleBlue,
      handleSelectClick,
      handleOptionHover,
      handleOptionClick,
      handleKeyDown,
    },
  ] = useSelect(
    initOptions ||
      Array(7)
        .fill({ title: "option" })
        .map(({ title }, index) => ({
          title: `${index}-${title}`,
        })),
    getSelectedValue
  );
  return (
    <MainWrapper
      isOpen={isOpen}
      {...others}
      tabIndex="0"
      onClick={handleSelectClick}
      onBlur={handleBlue}
      onKeyDown={handleKeyDown}
      //   onKeyUp={() => console.log("click")}
    >
      <span class="sod_label">{selectedValue}</span>
      <span
        class="sod_list_wrapper"
        onClick={(e) => e.stopPropagation()}
      >
        <span
          class="sod_list"
          ref={listRef}
          style={{ maxHeight: "196px" }}
        >
          {options.map(
            ({ title, isSelected, isActive }, index) => (
              <span
                class={`sod_option  ${
                  isSelected ? "selected" : ""
                } ${isActive ? "active" : ""}`}
                title="Pick a Flavor"
                data-value="-1"
                onClick={() => handleOptionClick(index)}
                onMouseOver={() => handleOptionHover(index)}
              >
                {title}
              </span>
            )
          )}
        </span>
      </span>
    </MainWrapper>
  );
};
