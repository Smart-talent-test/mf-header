import { useMediaQuery } from "@uidotdev/usehooks";
import React from "react";
import { Menu, MenuItem, Sidebar as SidebarApp } from "react-pro-sidebar";
import { SidebarLogo, SidebarWrapper } from "./Sidebar.styled";
import { breakpoints, theme } from "../../utils/theme";
import { ThemeProvider } from "styled-components";
import { LogOut } from "styled-icons/boxicons-regular";

const Sidebar: React.FunctionComponent = () => {
  const isTabletDevice = useMediaQuery(
    `only screen and (min-width : ${breakpoints.sm}) and (max-width: ${breakpoints.md})`
  );

  return (
    <ThemeProvider theme={theme}>
      <SidebarWrapper>
        <SidebarApp
          breakPoint="md"
          collapsed={isTabletDevice}
          className="sidebar"
        >
          <SidebarLogo></SidebarLogo>
          <Menu closeOnClick>
            <MenuItem icon={<LogOut />}>Menu Item</MenuItem>
          </Menu>
        </SidebarApp>
      </SidebarWrapper>
    </ThemeProvider>
  );
};

export default Sidebar;
