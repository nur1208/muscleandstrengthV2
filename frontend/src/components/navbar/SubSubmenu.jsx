import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  useHover,
  useSubmenu,
  useReduxActions,
} from "../../hooks";

export const SubSubmenu = ({
  subItemHref,
  subItemTitle,
  subSubMainTitle,
  subSubGroupTitle,
  itemsOfSubSubItem,
  subSubMainHref,
}) => {
  const initStyle = "has-sub-submenu";

  const [
    ref,
    isOpen,
    handleBack,
    handleClickItemBtn,
    handleClickGoTo,
  ] = useSubmenu();

  // useEffect(() => {
  //   updateIsOpen(isHovered);
  // }, [isHovered]);

  return (
    <li
      ref={ref}
      class={
        isOpen ? `${initStyle} open-sub-submenu` : initStyle
      }
    >
      <a class={"sub-submenu-button"} href={subItemHref}>
        {subItemTitle} <span class="caret-right"></span>
      </a>

      <div class="sub-submenu">
        <div
          onClick={handleBack}
          class="nav-link nav-blue back-button back-caret"
        >
          Back
        </div>
        <div class="view-all-link">
          {subSubMainTitle}
          <span onClick={() => handleClickGoTo(subSubMainHref)}>
            <button class="btn btn-blue">
              View all {subSubMainTitle}
            </button>
          </span>
        </div>
        <ul
          class={`link-list ${
            subSubMainTitle === "Brands"
              ? "link-list-top-brands"
              : ""
          }`}
        >
          <div class="link-list-title">{subSubGroupTitle}</div>
          {itemsOfSubSubItem.map(
            ({
              suSubItemTitle,
              subSubItemHref,
              suSubItemImageUrl,
            }) => (
              <li>
                <a
                  onClick={() => handleClickGoTo(subSubItemHref)}
                >
                  {subSubMainTitle === "Brands" ? (
                    <img
                      src={suSubItemImageUrl}
                      alt={
                        suSubItemImageUrl.split("/")[
                          suSubItemImageUrl.split("/").length - 1
                        ]
                      }
                    />
                  ) : (
                    suSubItemTitle
                  )}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </li>
  );
};
