import React from "react";
import { useSelector } from "react-redux";

export const Messages = () => {
  const { error } = useSelector((state) => state.user_store);

  return (
    <ul
      class="messages"
      style={{ display: error ? "block" : "none" }}
    >
      <li class="error-msg">
        <ul>
          <li>
            <span>{error}</span>
          </li>
        </ul>
      </li>
    </ul>
  );
};
