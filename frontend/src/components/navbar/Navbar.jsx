import { useSelector } from "react-redux";

import { GlobalStyle, MainWrapper } from "./navbar.styles";
import { Submenu } from "./Submenu";
import { navbarData } from "./data";
import { OPENED_TYPES } from "../../redux/constants";
export const Navbar = () => {
  const { isOpen, openedType } = useSelector(
    (state) => state.navbar_store
  );

  return (
    <MainWrapper>
      {isOpen && openedType === OPENED_TYPES.SIDE_NAVBAR && (
        <GlobalStyle />
      )}
      <ul class="menu-sys">
        {navbarData.map((item) => (
          <Submenu {...item} />
        ))}
      </ul>
    </MainWrapper>
  );
};
