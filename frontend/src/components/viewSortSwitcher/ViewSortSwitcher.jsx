import React from "react";
import { GridX } from "../../app.styles";
import { getIconById, ICONS_ID } from "../../icons";
import { MainWrapper } from "./viewSortSwitcher.styles";

export const ViewSortSwitcher = () => {
  const items = [
    { title: "Trending", iconId: ICONS_ID.IconPopularGray },
    { title: "What's New", iconId: ICONS_ID.IconDate },
    { title: "Discussed", iconId: ICONS_ID.IconDiscussed },
    { title: "Name", iconId: ICONS_ID.IconAlpha },
  ];
  return (
    <MainWrapper>
      <h2 class="switcher-heading">All Workouts For Men</h2>

      <div id="mnsview-sort-switcher">
        <GridX>
          <ul class="grid-x">
            {items.map(({ title, iconId }, index) => (
              <li
                key={`cell-${index}`}
                class={`cell small-3 ${
                  index === 0 ? "active" : ""
                }`}
              >
                <a
                  rel="nofollow"
                  class="mnsview-sort-link first"
                  href="?tid=223&amp;did=1"
                >
                  <div class="out">{getIconById(iconId)}</div>
                  <div class="over">
                    {getIconById(iconId, null, "#059")}
                  </div>
                  <div class="text">{title}</div>
                </a>
              </li>
            ))}
          </ul>
        </GridX>
      </div>
    </MainWrapper>
  );
};
