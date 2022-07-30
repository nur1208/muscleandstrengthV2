import {
  IconContentRecipe,
  IconContentTransformationWhite,
  IconNavDietPansWhite,
  IconNavExpertGuidesWhite,
  IconNavToolsWhite,
  IconNavWorkoutsWhite,
} from "../../icons";
import { GlobalStyle, MainWrapper } from "./navbar.styles";
import { Submenu } from "./Submenu";
import { navbarData } from "./data";
export const Navbar = () => {
  return (
    <MainWrapper>
      {/* <GlobalStyle /> */}
      <ul class="menu-sys">
        {navbarData.map((item) => (
          <Submenu {...item} />
        ))}
      </ul>
    </MainWrapper>
  );
};
