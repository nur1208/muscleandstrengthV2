import React from "react";
import { getIconById, ICONS_ID } from "../../icons";
import { footerData, FOOTER_ITEM_TYPE } from "./data";
import { MainWrapper } from "./footer.styles";
import { FooterItem } from "./FooterItem";

export const Footer = () => {
  return (
    <MainWrapper>
      <div class="footer-main">
        <div class="footer-main--inner">
          <div class="grid-x grid-margin-x">
            {footerData.mainFooterData.map((itemData) => (
              <FooterItem
                type={FOOTER_ITEM_TYPE.MAIN}
                {...itemData}
              />
            ))}
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-bottom--inner">
          <p>
            © 2006-2022,
            <span>Muscle &amp; Strength, LLC.</span>
            <span>
              1180 First Street South Ext, Columbia, SC, 29209.
            </span>
            Phone: 1-800-537-9910
          </p>
          <p>
            {footerData.bottomFooterData.map(
              (footerItemData, index) => (
                <FooterItem
                  type={FOOTER_ITEM_TYPE.BOTTOM}
                  {...footerItemData}
                  isLastOne={
                    index ===
                    footerData.bottomFooterData.length - 1
                  }
                />
              )
            )}
          </p>
          <img
            class=" lazyloaded"
            data-src="https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/brettandmeganfooter.png"
            alt="Muscle &amp; Strength"
            src="https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/brettandmeganfooter.png"
          />
        </div>
      </div>
    </MainWrapper>
  );
};
