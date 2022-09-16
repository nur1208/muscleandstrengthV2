import React from "react";
import { getIconById, ICONS_ID } from "../../icons";

export const Step = ({ title, children }) => {
  return (
    <li className="section allow active">
      <div class="step-title">
        <h3 class="title">
          {title}{" "}
          <span class="checkmark noshake">
            {getIconById(ICONS_ID.IconCheckMark)}
          </span>
        </h3>
        <div class="editLink">
          {getIconById(ICONS_ID.IconEdit)}
          Edit
        </div>
      </div>
      <div className="step a-item">{children}</div>
    </li>
  );
};
