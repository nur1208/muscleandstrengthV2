import React, { useEffect, useState } from "react";
import { useSubmenu } from "../../hooks";
import { getIconById } from "../../icons";
import { SubSubmenu } from "./SubSubmenu";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Submenu = ({
  navbarItemTitle,
  hasSubmenu,
  navbarItemHref,
  groups,
  navbarItemIconId,
}) => {
  const initStyle = `base-item ${hasSubmenu && "has-submenu"}`;

  const [
    ref,
    isOpen,
    handleBack,
    handleClickItemBtn,
    handleClickGoTo,
  ] = useSubmenu();

  return (
    <li
      ref={ref}
      class={isOpen ? `${initStyle} open-submenu` : initStyle}
    >
      <span
        class="base-item-button"
        onClick={() => handleClickItemBtn(navbarItemHref)}
      >
        <span class="icon">
          {getIconById(navbarItemIconId, {
            width: "2em",
            height: "2em",
          })}
        </span>
        {navbarItemTitle}
        <span class="caret">›</span>
      </span>
      <div class="submenu">
        <div
          onClick={handleBack}
          class="nav-link nav-blue back-button back-caret"
        >
          Back
        </div>
        <div class="view-all-link">
          {navbarItemTitle}{" "}
          <span onClick={() => handleClickGoTo(navbarItemHref)}>
            <button class="btn btn-blue">
              Go to {navbarItemTitle}
            </button>
          </span>
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
