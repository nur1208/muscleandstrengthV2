import React, { useState } from "react";
import { getIconById, ICONS_ID } from "../../icons";
import { RewardsBox } from "./RewardsBox";

export const CartTool = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(true);
  const isOrder = title === "Order Totals";
  return (
    <div className="cartTools">
      <ul class="accordion" data-accordion="">
        <li
          class={`accordion-item inactive-on-mobile ${
            isOpen ? "is-active" : ""
          }`}
          data-accordion-item=""
        >
          <div
            class="accordion-title blue-header"
            onClick={() => !isOrder && setIsOpen(!isOpen)}
            style={{ cursor: isOrder ? "text" : "pointer" }}
          >
            <span>{title}</span>
            {!isOrder && <span class="caret-right"></span>}
          </div>
          <div class="accordion-content" data-tab-content="">
            <div
              class="accordion-content-inner"
              id="tool-box-coupon"
            >
              {children}
            </div>
          </div>
        </li>
      </ul>
      {isOrder && (
        <div class="payment-methods">
          <div class="payment-logo">
            {getIconById(ICONS_ID.IconVISA)}
          </div>
          <div class="payment-logo">
            {getIconById(ICONS_ID.IconMC)}
          </div>
          <div class="payment-logo">
            {getIconById(ICONS_ID.IconAMEX)}
          </div>
          <div class="payment-logo">
            {getIconById(ICONS_ID.IconDISC)}
          </div>
          <div class="payment-logo">
            {getIconById(ICONS_ID.IconPAYPAL)}
          </div>
          <div class="payment-logo">
            {getIconById(ICONS_ID.IconAPPLEPAY)}
          </div>
          <div class="payment-logo">
            {getIconById(ICONS_ID.IconGOOGLEPAY)}
          </div>
        </div>
      )}
    </div>
  );
};
