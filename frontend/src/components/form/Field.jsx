import React from "react";

export const Field = ({
  placeholder,
  id,
  name,
  type,
  required,
}) => {
  return (
    <div
      className={`filed-warper ${required ? "is-required" : ""}`}
    >
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
    </div>
  );
};
