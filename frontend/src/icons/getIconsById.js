import {
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
} from "./index";

export const getIconById = (iconId, style) => {
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
      return <IconSupportWhite style={style} />;
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
      return <IconClose style={style} />;
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

    default:
      return <IconQuestionMark style={style} />;
  }
};
