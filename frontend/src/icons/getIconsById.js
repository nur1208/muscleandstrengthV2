import {
  IconAlpha,
  IconDiscussed,
  IconDate,
  IconPopularGray,
  IconDealAlert,
  IconEdit,
  IconCheckMark,
  IconGOOGLEPAY,
  IconAPPLEPAY,
  IconPAYPAL,
  IconDISC,
  IconAMEX,
  IconMC,
  IconVISA,
  IconSale,
  IconLowPrice,
  IconAsc,
  IconUpdateWhite,
  IconEmail,
  IconCog,
  IconAddressBook,
  IconReferralProgram,
  IconMnsCoin,
  IconLogout,
  IconHistory,
  IconAccount,
  IconGoalHealthyLifestyle,
  IconGoalBuildMuscle,
  IconGoalBurnFat,
  IconCreate,
  IconVerifiedBuyer,
  IconCreateBlue,
  IconPadlock,
  IconSavedCards,
  IconTruck,
  IconShare,
  IconBodyTransformWhite,
  IconMnsRewardsWhite,
  IconCustomerSupport,
  IconLike,
  IconMnsRewards,
  IconDeal,
  IconLogoBlue,
  IconAirplane,
  IconTwitter,
  IconFacebook,
  IconInstagram,
  IconNavToolsWhite,
  IconNavWorkoutsWhite,
  IconPinterest,
  IconQuestionMark,
  IconNavStoreWhite,
  IconNavExpertGuidesWhite,
  IconNavDietPansWhite,
  IconContentTransformationWhite,
  IconContentRecipe,
  IconInstaComments,
  IconSupportWhite,
  IconNavStore,
  IconNavWorkouts,
  IconContentTransformation,
  IconNavExpertGuides,
  IconNavDietPlans,
  IconNavTools,
  IconClose,
  IconYoutube,
  IconDealWhite,
} from "./index";

export const getIconById = (iconId, style, fill) => {
  switch (iconId) {
    case "icon-question-mark":
      return <IconQuestionMark style={style} />;
    case "icon-nav-store-white":
      return <IconNavStoreWhite style={style} />;
    case "icon-nav-workouts-white":
      return <IconNavWorkoutsWhite style={style} />;
    case "icon-nav-expert-guides-white":
      return <IconNavExpertGuidesWhite style={style} />;
    case "icon-nav-diet-plans-white":
      return <IconNavDietPansWhite style={style} />;
    case "icon-content-transformation-white":
      return <IconContentTransformationWhite style={style} />;
    case "icon-content-recipe":
      return <IconContentRecipe style={style} />;
    case "icon-nav-tools-white":
      return <IconNavToolsWhite style={style} />;
    case "icon-insta-comments":
      return <IconInstaComments style={style} />;
    case "icon-support-white":
      return <IconSupportWhite fill={fill} style={style} />;
    case "icon-nav-store":
      return <IconNavStore style={style} />;
    case "icon-nav-workouts":
      return <IconNavWorkouts style={style} />;
    case "icon-content-transformation":
      return <IconContentTransformation style={style} />;
    case "icon-nav-expert-guides":
      return <IconNavExpertGuides style={style} />;

    case "icon-nav-diet-plans":
      return <IconNavDietPlans style={style} />;

    case "icon-nav-tools":
      return <IconNavTools style={style} />;
    case "icon-close":
      return <IconClose style={style} fill={fill} />;
    case "icon-youtube":
      return <IconYoutube style={style} />;

    case "icon-instagram":
      return <IconInstagram style={style} />;

    case "icon-pinterest":
      return <IconPinterest style={style} />;

    case "icon-facebook":
      return <IconFacebook style={style} />;

    case "icon-twitter":
      return <IconTwitter style={style} />;

    case "icon-airplane":
      return <IconAirplane style={style} />;

    case "icon-logo-blue":
      return <IconLogoBlue style={style} />;

    case "icon-deal":
      return <IconDeal style={style} fill={fill} />;

    case "icon-mns-rewards":
      return <IconMnsRewards style={style} />;

    case "icon-like":
      return <IconLike style={style} />;

    case "icon-customer-support":
      return <IconCustomerSupport style={style} />;

    case "icon-mns-rewards-white":
      return <IconMnsRewardsWhite style={style} />;

    case "icon-deal-white":
      return <IconDealWhite style={style} />;

    case "icon-body-transform-white":
      return <IconBodyTransformWhite style={style} />;

    case "icon-share":
      return <IconShare style={style} />;

    case "icon-truck":
      return <IconTruck style={style} fill={fill} />;

    case "icon-saved-cards":
      return <IconSavedCards style={style} />;

    case "icon-padlock":
      return <IconPadlock style={style} fill={fill} />;

    case "icon-create-blue":
      return <IconCreateBlue style={style} fill={fill} />;

    case "icon-create":
      return <IconCreate style={style} />;

    case "icon-verified-buyer":
      return <IconVerifiedBuyer style={style} />;

    case "icon-goal-burn-fat":
      return <IconGoalBurnFat style={style} />;

    case "icon-goal-build-muscle":
      return <IconGoalBuildMuscle style={style} />;

    case "icon-goal-healthy-lifestyle":
      return <IconGoalHealthyLifestyle style={style} />;

    case "icon-account":
      return <IconAccount style={style} />;

    case "icon-history":
      return <IconHistory style={style} />;

    case "icon-logout":
      return <IconLogout style={style} />;

    case "icon-mns-coin":
      return <IconMnsCoin style={style} />;

    case "icon-referral-program":
      return <IconReferralProgram style={style} />;

    case "icon-address-book":
      return <IconAddressBook style={style} />;

    case "icon-cog":
      return <IconCog style={style} />;

    case "icon-email":
      return <IconEmail style={style} />;

    case "icon-update-white":
      return <IconUpdateWhite style={style} />;

    case "icon-asc":
      return <IconAsc style={style} />;

    case "icon-low-price":
      return <IconLowPrice style={style} />;

    case "icon-sale":
      return <IconSale style={style} />;

    case "icon-VISA":
      return <IconVISA style={style} />;

    case "icon-MC":
      return <IconMC style={style} />;

    case "icon-AMEX":
      return <IconAMEX style={style} />;

    case "icon-DISC":
      return <IconDISC style={style} />;

    case "icon-PAYPAL":
      return <IconPAYPAL style={style} />;

    case "icon-APPLEPAY":
      return <IconAPPLEPAY style={style} />;

    case "icon-GOOGLEPAY":
      return <IconGOOGLEPAY style={style} />;

    case "icon-check-mark":
      return <IconCheckMark style={style} />;

    case "icon-edit":
      return <IconEdit style={style} />;

    case "icon-deal-alert":
      return <IconDealAlert style={style} />;

    case "icon-popular-gray":
      return <IconPopularGray style={style} fill={fill} />;

    case "icon-date":
      return <IconDate style={style} fill={fill} />;

    case "icon-discussed":
      return <IconDiscussed style={style} fill={fill} />;

    case "icon-alpha":
      return <IconAlpha style={style} fill={fill} />;

    default:
      return <IconQuestionMark style={style} />;
  }
};
