import {
  IconContentRecipe,
  IconContentTransformationWhite,
  IconNavDietPansWhite,
  IconNavExpertGuidesWhite,
  IconNavToolsWhite,
  IconNavWorkoutsWhite,
} from "../../icons";
import { MainWrapper } from "./navbar.styles";
import { Submenu } from "./Submenu";
import { navbarData } from "./data";
export const Navbar = () => {
  return (
    <MainWrapper>
      <ul class="menu-sys">
        {navbarData.map((item) => (
          <Submenu {...item} />
        ))}
      </ul>
    </MainWrapper>
  );
};
