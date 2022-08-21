import React from "react";
import { useSelector } from "react-redux";
import { useReduxActions } from "../../hooks";
import { FIELD_TYPES, FORM_TYPES } from "./data";

export const Field = ({
  placeholder,
  id,
  name,
  type,
  required,
  fieldType,
  autocomplete,
  options,
  formType,
}) => {
  const { userInput } = useSelector((state) => state.user_store);

  const { updateField } = useReduxActions();
  const getCurrentFormType = () =>
    formType === FORM_TYPES.SIGN_UP ? "signUp" : "login";

  const handleOnChange = (e) => {
    const newObject = {};
    // newObject[type];
    newObject[getCurrentFormType()] = {
      ...userInput[getCurrentFormType()],
    };
    newObject[getCurrentFormType()][name] = e.target.value;
    updateField(newObject);
  };
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
          value={userInput[getCurrentFormType()][name] || ""}
          id={id}
          type={type}
          class="input-text required-entry"
          title={placeholder}
          required={required}
          autocomplete={false}
          onChange={handleOnChange}
        />
      ) : fieldType === FIELD_TYPES.SELECT ? (
        <>
          <label for="selector" class="fl-label">
            {options[0]}
          </label>
          <select
            id="selector"
            placeholder={placeholder}
            autocomplete={autocomplete}
            name={name}
            onChange={handleOnChange}
            title={name}
            class="fl-select"
          >
            {options.map((option, index) => (
              <option
                key={`index-${index}`}
                value={index === 0 ? "" : option}
                selected={index === 0}
                // disabled={index === 0}
              >
                {option}
              </option>
            ))}
          </select>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
