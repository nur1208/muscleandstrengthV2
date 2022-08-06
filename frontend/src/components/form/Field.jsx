import React from "react";
import { FIELD_TYPES } from "./data";

export const Field = ({
  placeholder,
  id,
  name,
  type,
  required,
  fieldType,
  autocomplete,
  options,
}) => {
  return (
    <div
      className={`filed-warper ${
        required && fieldType !== FIELD_TYPES.SELECT
          ? "is-required"
          : ""
      }`}
    >
      {fieldType === FIELD_TYPES.INPUT ? (
        <input
          placeholder={placeholder}
          name={name}
          value=""
          id={id}
          type={type}
          class="input-text required-entry"
          title={placeholder}
          required={required}
        />
      ) : fieldType === FIELD_TYPES.SELECT ? (
        <>
          <label for="selector" class="fl-label">
            Gender
          </label>
          <select
            id="selector"
            placeholder={placeholder}
            autocomplete={autocomplete}
            name={name}
            title={name}
            class="fl-select"
          >
            <option value="" selected="" disabled="">
              Gender
            </option>
            <option value="24">Male</option>
            <option value="25">Female</option>
          </select>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
