import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";
function Sidebar({isMenuOpen,toggleMenu}) {
  return (
    <SidebarContainer isMenuOpen={isMenuOpen} onClick={toggleMenu} >
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/burgers">Burgers</SidebarLink>
        <SidebarLink to="/">Today's Special</SidebarLink>
        <SidebarLink to="/desserts">Desserts</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/">Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
}

export default Sidebar;
