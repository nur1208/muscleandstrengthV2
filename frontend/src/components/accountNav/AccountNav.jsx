import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getIconById, ICONS_ID, SvgWrapper } from "../../icons";
import { MainWrapper } from "./accountNav.styles";
import { accountNavData } from "./data";

export const AccountNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { navItem } = useParams();

  return (
    <MainWrapper isOpen={isOpen}>
      <span class="title" onClick={() => setIsOpen(!isOpen)}>
        <span>Account Navigation</span>
        <span class="inline-caret">›</span>
      </span>
      <div class="nav-wrap">
        {accountNavData.map(({ label, iconId, selected }) => (
          <Link
            class={
              label.replaceAll(" ", "_").toLocaleLowerCase() ===
              navItem
                ? "selected"
                : undefined
            }
            to={`/store/customer/account/${label
              .replaceAll(" ", "_")
              .toLocaleLowerCase()}`}
          >
            <SvgWrapper childStyle="width:1.5em; height:1.5em; margin-bottom: -0.4em!important; margin-right: .5em;">
              {getIconById(iconId)}
            </SvgWrapper>
            {label}
          </Link>
        ))}
      </div>
    </MainWrapper>
  );
};
