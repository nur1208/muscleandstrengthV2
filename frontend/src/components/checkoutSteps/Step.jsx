import React from "react";
import { useUpdateSteps } from "../../hooks";
import { getIconById, ICONS_ID } from "../../icons";

export const Step = ({
  index: stepIndex,
  title,
  children,
  isAllow,
  isActive,
}) => {
  const [updateStep] = useUpdateSteps();
  const handleEdit = (e) => {
    e.preventDefault();
    if (isAllow)
      updateStep((item, index) =>
        index > stepIndex
          ? { ...item, isActive: false, isAllow: false }
          : index === stepIndex
          ? { ...item, isActive: true, isAllow: true }
          : { ...item, isActive: false }
      );
  };
  return (
    <li
      className={`section ${isAllow ? "allow" : ""} ${
        isActive ? "active" : ""
      }`}
    >
      <div className="step-title" onClick={handleEdit}>
        <h3 className="title">
          {title}{" "}
          <span className="checkmark noshake">
            {getIconById(ICONS_ID.IconCheckMark)}
          </span>
        </h3>
        <div className="editLink">
          {getIconById(ICONS_ID.IconEdit)}
          Edit
        </div>
      </div>
      <div
        style={{ display: !(isAllow && isActive) && "none" }}
        className="step a-item"
      >
        {children}
      </div>
    </li>
  );
};
