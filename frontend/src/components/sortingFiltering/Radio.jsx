import React, { useState } from "react";

export const Radio = ({ options: intiOptions }) => {
  const [options, setOptions] = useState(
    intiOptions.map((option, index) => ({
      title: option,
      isChecked: index === 0,
    }))
  );
  const handleOnClick = (index) => {
    setOptions((currentOptions) =>
      currentOptions.map((option, optionIndex) => ({
        ...option,
        isChecked: optionIndex === index,
      }))
    );
  };
  return (
    <div className="sort-by section">
      <div class="wrap">
        <ul class="simple-radio list-style review-sorting">
          {options.map(({ title, isChecked }, index) => (
            <li
              class={isChecked ? "checked" : undefined}
              key={`${index}-option`}
              onClick={() => handleOnClick(index)}
            >
              <input
                type="radio"
                name="sort-group"
                value="recent"
                checked="checked"
              />
              <div class="radio-check">
                <span class="yes">
                  <span class="icon-check"></span>
                </span>
              </div>
              {title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
