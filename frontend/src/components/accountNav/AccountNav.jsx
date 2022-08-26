import React, { useState } from "react";
import { getIconById, ICONS_ID, SvgWrapper } from "../../icons";
import { MainWrapper } from "./accountNav.styles";
import { accountNavData } from "./data";

export const AccountNav = () => {
  const initNavItems = accountNavData;
  initNavItems[0].selected = true;
  const [navItems, setNavItems] = useState(initNavItems);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MainWrapper isOpen={isOpen}>
      <span class="title" onClick={() => setIsOpen(!isOpen)}>
        <span>Account Navigation</span>
        <span class="inline-caret">›</span>
      </span>
      <div class="nav-wrap">
        {navItems.map(({ label, iconId, selected }) => (
          <a
            class={selected ? "selected" : undefined}
            href="/store/customer/account/"
          >
            <SvgWrapper childStyle="width:1.5em; height:1.5em; margin-bottom: -0.4em!important; margin-right: .5em;">
              {getIconById(iconId)}
            </SvgWrapper>
            {label}
          </a>
        ))}
      </div>
    </MainWrapper>
  );
};
