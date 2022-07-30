import React, { useEffect, useState } from "react";
import {
  useHover,
  useOpenSubmenu,
  useReduxActions,
} from "../../hooks";
import { getIconById, IconNavStoreWhite } from "../../icons";
import { SubSubmenu } from "./SubSubmenu";
import { useSelector } from "react-redux";
import { OPENED_TYPES } from "../../redux/constants";

export const Submenu = ({
  navbarItemTitle,
  hasSubmenu,
  navbarItemHref,
  groups,
  navbarItemIconId,
}) => {
  const initStyle = `base-item ${hasSubmenu && "has-submenu"}`;
  const { openedType } = useSelector(
    (state) => state.navbar_store
  );
  const [ref, isOpen, handleBack] = useOpenSubmenu();

  return (
    <li
      ref={ref}
      class={isOpen ? `${initStyle} open-submenu` : initStyle}
      // onClick={() => console.log(navbarItemTitle)}
    >
      <a
        class="base-item-button"
        href={
          isOpen && openedType === OPENED_TYPES.SIDE_NAVBAR
            ? "javascript:void(0)"
            : navbarItemHref
          // navbarItemHref
          // "javascript:void(0)"
        }
      >
        <span class="icon">
          {/* <IconNavStoreWhite
            style={{ width: "2em", height: "2em" }}
          /> */}
          {getIconById(navbarItemIconId, {
            width: "2em",
            height: "2em",
          })}
        </span>
        {navbarItemTitle}
        <span class="caret">›</span>
      </a>
      <div class="submenu">
        <div
          onClick={handleBack}
          class="nav-link nav-blue back-button back-caret"
        >
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
