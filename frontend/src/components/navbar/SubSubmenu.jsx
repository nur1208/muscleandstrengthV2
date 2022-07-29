import React from "react";
import { useHover } from "../../hooks";

export const SubSubmenu = ({
  subItemHref,
  subItemTitle,
  subSubMainTitle,
  subSubGroupTitle,
  itemsOfSubSubItem,
  subSubMainHref,
}) => {
  const initStyle = "has-sub-submenu";

  const [hoverRef, isHovered] = useHover();

  return (
    <li
      ref={hoverRef}
      class={
        isHovered ? `${initStyle} open-sub-submenu` : initStyle
      }
    >
      <a class={"sub-submenu-button"} href={subItemHref}>
        {subItemTitle} <span class="caret-right"></span>
      </a>

      <div class="sub-submenu">
        <div class="nav-link nav-blue back-button back-caret">
          Back
        </div>
        <div class="view-all-link">
          {subSubMainTitle}
          <a href={subSubMainHref}>
            <button class="btn btn-blue">
              View all {subSubMainTitle}
            </button>
          </a>
        </div>
        <ul class="link-list">
          <div class="link-list-title">{subSubGroupTitle}</div>
          {itemsOfSubSubItem.map(
            ({ suSubItemTitle, subSubItemHref }) => (
              <li>
                <a href={subSubItemHref}>{suSubItemTitle}</a>
              </li>
            )
          )}
        </ul>
      </div>
    </li>
  );
};
