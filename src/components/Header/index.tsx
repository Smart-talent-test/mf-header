import { MenuOutline } from "styled-icons/evaicons-outline";

import {
  DashboardLogo,
  HeaderWrapper,
  ResponsiveMenu,
  UserProfile,
} from "./Header.styled";
import { theme } from "../../utils/theme";
import { ThemeProvider } from "styled-components";

const Header: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <HeaderWrapper>
        <ResponsiveMenu onClick={void 0}>
          <MenuOutline />
        </ResponsiveMenu>
        <DashboardLogo>{/* <Logo /> */}</DashboardLogo>
        <UserProfile>
        </UserProfile>
      </HeaderWrapper>
    </ThemeProvider>
  );
};

export default Header;
