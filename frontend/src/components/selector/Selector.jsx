import React from "react";
import { useSelect } from "../../hooks";
import { MainWrapper } from "./selector.styles";

export const Selector = ({
  options: initOptions,
  label,
  getSelectedValue,
  customValueUpdate,
  disabledOptions,
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
    getSelectedValue,
    customValueUpdate,
    disabledOptions
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
            (
              { title, isSelected, isActive, isDisabled },
              index
            ) => (
              <span
                class={`sod_option  ${
                  isSelected ? "selected" : ""
                } ${isActive ? "active" : ""} ${
                  isDisabled ? "disabled" : ""
                }`}
                key={`${index}-option`}
                title="Pick a Flavor"
                data-value="-1"
                onClick={() =>
                  !isDisabled && handleOptionClick(index)
                }
                onMouseOver={() =>
                  !isDisabled && handleOptionHover(index)
                }
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
