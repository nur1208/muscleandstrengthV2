import React from "react";
import { getIconById } from "../../icons";
import { capitalizeFirstLetter } from "../../utils";
import { FOOTER_ITEM_TYPE } from "./data";

export const FooterItem = ({
  type,
  title,
  items,
  isLastOne,
  href,
}) => {
  return type === FOOTER_ITEM_TYPE.MAIN ? (
    <div class="cell small-6 medium-3 large-2">
      <h6>{title}</h6>
      {title === "Follow" ? (
        <ul class="social-links">
          {items.map(({ iconId, href }) => (
            <li>
              <a rel="nofollow" href={href}>
                <span class="visually-hidden">
                  Subscribe to us on{" "}
                  {capitalizeFirstLetter(iconId.split("-")[1])}
                </span>
                {getIconById(iconId)}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          {items.map(({ title, href }) => (
            <li>
              <a rel="nofollow" href={href}>
                {title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  ) : (
    <>
      <a rel="nofollow" href={href}>
        {title}
      </a>
      {isLastOne ? "" : " - "}
    </>
  );
};
