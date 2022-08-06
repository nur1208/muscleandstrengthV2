import { getSignUpBenefitData } from "./SignUpBenefits/script.js";

const main = async () => {
  console.log("start scraping... ⌛");
  await getSignUpBenefitData();
  console.log("DONE scraping ✔");
};

main();
