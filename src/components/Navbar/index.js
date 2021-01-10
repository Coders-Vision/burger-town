import React from "react";
import { useSelector } from "react-redux";
import { getItemsCount } from "../../features/cart/cartSlice";
import {
  Nav,
  NavLink,
  NavIcon,
  Bars,
  Cart,
  CartIcon,
  CartCounter,
} from "./NavbarElements";

function Navbar({ toggleMenu, toggleCart }) {
  const cartCount = useSelector(getItemsCount);
  return (
    <>
      <Nav>
        <NavLink to="/">Burger Town</NavLink>
        <NavIcon onClick={toggleMenu}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
        <Cart>
          <CartIcon onClick={toggleCart}></CartIcon>
          {cartCount > 0 ? <CartCounter>{cartCount}</CartCounter> : ""}
        </Cart>
      </Nav>
    </>
  );
}

export default Navbar;
