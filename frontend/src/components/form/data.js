export const loginFields = [
  {
    placeholder: "Email Address",
    id: "email",
    name: "email",
    type: "email",
    required: true,
    fieldType: "INPUT",
  },
  {
    placeholder: "Password",
    id: "pass",
    name: "password",
    type: "password",
    required: true,
    fieldType: "INPUT",
  },
];

export const signUpFields = [
  {
    placeholder: "First Name",
    id: "firstname",
    name: "firstName",
    type: "text",
    required: true,
    fieldType: "INPUT",
  },
  {
    placeholder: "Last Name",
    id: "lastname",
    name: "lastName",
    type: "text",
    required: true,
    fieldType: "INPUT",
  },
  {
    placeholder: "Email Address",
    id: "email_address",
    name: "email",
    type: "text",
    required: true,
    fieldType: "INPUT",
  },
  {
    placeholder: "Gender",
    id: "register-gender",
    name: "gender",
    required: false,
    options: ["Gender", "Male", "Female"],
    fieldType: "SELECT",
  },
  {
    placeholder: "Goal",
    id: "register-goal",
    name: "goal",
    required: false,
    options: [
      "Goal",
      "Build Muscle",
      "Burn Fat",
      "Increase Strength",
      "Improve Sport Performance",
      "Healthy Lifestyle",
    ],
    fieldType: "SELECT",
  },
  {
    id: "register-experience",
    name: "trainingExperience",
    required: false,
    options: [
      "Training Experience",
      "Beginner (< 1 Year)",
      "Intermediate (1-3 Years)",
      "Advanced (3+ Years)",
    ],
    fieldType: "SELECT",
  },
  {
    placeholder: "Password",
    id: "password",
    name: "password",
    type: "password",
    required: true,
    fieldType: "INPUT",
  },
  {
    placeholder: "Confirm Password",
    id: "confirmation",
    name: "confirmation",
    type: "password",
    required: true,
    fieldType: "INPUT",
  },
  {
    placeholder: "Referral Code (optional)",
    id: "rewards_referral",
    name: "referralCode",
    type: "text",
    required: false,
    fieldType: "INPUT",
  },
];

export const benefits = [
  {
    iconId: "icon-mns-rewards-white",
    text: "Reward points to use on exclusive products or order discounts",
  },
  {
    iconId: "icon-nav-store-white",
    text: "Free gift offers, product sampling & Bulk Discounts",
  },
  {
    iconId: "icon-deal-white",
    text: "Early access when we post sales, discounts and deals",
  },
  {
    iconId: "icon-insta-comments",
    text: "Amazing 7 day support from our team of fitness enthusiasts",
  },
  {
    iconId: "icon-body-transform-white",
    text: "Free workouts, fitness tools, videos, diet plans, expert guides and motivational content",
  },
];

export const FORM_TYPES = {
  LOGIN: "LOGIN",
  LOGIN_MODAL: "LOGIN_MODAL",
  SIGN_UP: "SIGN_UP",
};

export const FIELD_TYPES = {
  INPUT: "INPUT",
  SELECT: "SELECT",
};
