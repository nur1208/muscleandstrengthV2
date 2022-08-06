import React from "react";
import { getIconById } from "../../icons";
import { benefits } from "./data";

export const RightSignUpInfo = () => {
  return (
    <>
      {benefits.map(({ iconId, text }) => (
        <div className="benefit">
          <div className="icon">{getIconById(iconId)}</div>
          <div className="text">{text}</div>
        </div>
      ))}
    </>
  );
};
