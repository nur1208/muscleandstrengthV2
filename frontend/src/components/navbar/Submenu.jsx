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
import { Link } from "react-router-dom";

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
      <Link
        class="base-item-button"
        to={
          isOpen && openedType === OPENED_TYPES.SIDE_NAVBAR
            ? "#"
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
      </Link>
      <div class="submenu">
        <div
          onClick={handleBack}
          class="nav-link nav-blue back-button back-caret"
        >
          Back
        </div>
        <div class="view-all-link">
          {navbarItemTitle}{" "}
          <Link to={navbarItemHref}>
            <button class="btn btn-blue">
              Go to {navbarItemTitle}
            </button>
          </Link>
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
                      <Link to={subItemHref}>
                        {subItemTitle}
                      </Link>
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
