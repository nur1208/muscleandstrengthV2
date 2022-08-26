import React from "react";
import { getIconById, ICONS_ID, SvgWrapper } from "../../icons";
import { MainWrapper } from "./accountNav.styles";

export const AccountNav = () => {
  return (
    <MainWrapper>
      <span class="title">
        Account Navigation<span class="inline-caret">›</span>
      </span>
      <div class="nav-wrap">
        <a
          class="dashboard selected"
          href="/store/customer/account/"
        >
          {/* <svg style=>
            <use href="/store/skin/frontend/mnsv4/default/images/svg-icons/icons.svg#icon-account"></use>
          </svg> */}
          <SvgWrapper childStyle="width:1.5em; height:1.5em; margin-bottom: -0.4em!important; margin-right: .5em;">
            {getIconById(ICONS_ID.IconAccount)}
          </SvgWrapper>
          Dashboard Home
        </a>
        <a class="orders" href="/store/sales/order/history/">
          {/* <svg style="width:1.5em; height:1.5em; margin-bottom: -0.4em; margin-right: .5em;">
            <use href="/store/skin/frontend/mnsv4/default/images/svg-icons/icons.svg#icon-history"></use>
          </svg> */}
          <SvgWrapper childStyle="width:1.5em; height:1.5em; margin-bottom: -0.4em!important; margin-right: .5em;">
            {getIconById(ICONS_ID.IconHistory)}
          </SvgWrapper>
          Order History
        </a>
        <a class="points" href="/store/rewards/customer/">
          {/* <svg style="width:1.5em; height:1.5em; margin-bottom: -0.4em; margin-right: .5em;">
            <use href="/store/skin/frontend/mnsv4/default/images/svg-icons/icons.svg#icon-mns-coin"></use>
          </svg> */}
          <SvgWrapper childStyle="width:1.5em; height:1.5em; margin-bottom: -0.4em!important; margin-right: .5em;">
            {getIconById(ICONS_ID.IconMnsCoin)}
          </SvgWrapper>
          Points &amp; Rewards
        </a>
        <a class="referral" href="/store/rewardsref/customer/">
          {/* <svg style="width:1.5em; height:1.5em; margin-bottom: -0.4em; margin-right: .5em;">
            <use href="/store/skin/frontend/mnsv4/default/images/svg-icons/icons.svg#icon-referral-program"></use>
          </svg> */}
          <SvgWrapper childStyle="width:1.5em; height:1.5em; margin-bottom: -0.4em!important; margin-right: .5em;">
            {getIconById(ICONS_ID.IconReferralProgram)}
          </SvgWrapper>
          My Referrals
        </a>
        <a class="cards" href="/store/usaepay/manage/">
          {/* <svg style="width:1.5em; height:1.5em; margin-bottom: -0.3em; margin-right: .5em;">
            <use href="/store/skin/frontend/mnsv4/default/images/svg-icons/icons.svg#icon-saved-cards"></use>
          </svg> */}
          <SvgWrapper childStyle="width:1.5em; height:1.5em; margin-bottom: -0.4em!important; margin-right: .5em;">
            {getIconById(ICONS_ID.IconSavedCards)}
          </SvgWrapper>
          Saved Credit Cards
        </a>
        <a class="address" href="/store/customer/address/">
          {/* <svg style="width:1.5em; height:1.5em; margin-bottom: -0.3em; margin-right: .5em;">
            <use href="/store/skin/frontend/mnsv4/default/images/svg-icons/icons.svg#icon-address-book"></use>
          </svg> */}
          <SvgWrapper childStyle="width:1.5em; height:1.5em; margin-bottom: -0.4em!important; margin-right: .5em;">
            {getIconById(ICONS_ID.IconAddressBook)}
          </SvgWrapper>
          Address Book
        </a>
        <a class="update" href="/store/customer/account/edit/">
          {/* <svg style="width:1.5em; height:1.5em; margin-bottom: -0.4em; margin-right: .5em;">
            <use href="/store/skin/frontend/mnsv4/default/images/svg-icons/icons.svg#icon-cog"></use>
          </svg> */}
          <SvgWrapper childStyle="width:1.5em; height:1.5em; margin-bottom: -0.4em!important; margin-right: .5em;">
            {getIconById(ICONS_ID.IconCog)}
          </SvgWrapper>
          Update Profile
        </a>
        <a
          class="subscriptions"
          href="/store/customer/subscriptions/"
        >
          {/* <svg style="width:1.5em; height:1.5em; margin-bottom: -0.4em; margin-right: .5em;">
            <use href="/store/skin/frontend/mnsv4/default/images/svg-icons/icons.svg#icon-email"></use>
          </svg> */}
          <SvgWrapper childStyle="width:1.5em; height:1.5em; margin-bottom: -0.4em!important; margin-right: .5em;">
            {getIconById(ICONS_ID.IconEmail)}
          </SvgWrapper>
          Email Subscriptions
        </a>
      </div>
    </MainWrapper>
  );
};
