import React from "react";
import { useHover } from "../../hooks";
import { IconNavStoreWhite } from "../../icons";
import { SubSubmenu } from "./SubSubmenu";

export const Submenu = ({
  navbarItemTitle,
  hasSubmenu,
  navbarItemHref,
  groups,
}) => {
  const initStyle = `base-item ${hasSubmenu && "has-submenu"}`;
  const [hoverRef, isHovered] = useHover();

  return (
    <li
      ref={hoverRef}
      class={isHovered ? `${initStyle} open-submenu` : initStyle}
    >
      <a class="base-item-button" href={navbarItemHref}>
        <span class="icon">
          <IconNavStoreWhite
            style={{ width: "2em", height: "2em" }}
          />
        </span>
        {navbarItemTitle}
        <span class="caret">›</span>
      </a>
      <div class="submenu">
        <div class="nav-link nav-blue back-button back-caret">
          Back
        </div>
        <div class="view-all-link">
          {navbarItemTitle}{" "}
          <a href={navbarItemHref}>
            <button class="btn btn-blue">
              Go to {navbarItemTitle}
            </button>
          </a>
        </div>
        {groups.map(
          ({
            groupHasSubSubmenu,
            groupTitle,
            itemsOfSubItem,
          }) => (
            <ul
              class={`link-list ${
                groupHasSubSubmenu && "link-list-submenu"
              }`}
            >
              <div class="link-list-title">{groupTitle}</div>
              {itemsOfSubItem.map(
                ({
                  hasSubSubmenu,
                  subItemHref,
                  subItemTitle,
                  itemsOfSubSubItem,
                  subSubGroupTitle,
                  subSubMainTitle,
                  subSubMainHref,
                }) =>
                  hasSubSubmenu ? (
                    <SubSubmenu
                      subItemHrf={subItemHref}
                      subItemTitle={subItemTitle}
                      itemsOfSubSubItem={itemsOfSubSubItem}
                      subSubGroupTitle={subSubGroupTitle}
                      subSubMainTitle={subSubMainTitle}
                      subSubMainHref={subSubMainHref}
                    />
                  ) : (
                    <li>
                      <a href={subItemHref}>{subItemTitle}</a>
                    </li>
                  )
              )}
            </ul>
          )
        )}
      </div>
    </li>
  );
};
