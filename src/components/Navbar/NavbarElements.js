import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";
import { RiShoppingCart2Fill } from "react-icons/ri";
export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  font-size: clamp(1rem, 5vw, 2rem);
  @media screen and (max-width: 400px) {
    position: absolute;
    top: 15px;
    left: 12px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0px;
  cursor: pointer;
  color: #fff;
  p {
    transform: translate(-80%, 110%);
    font-weight: bold;
    font-size: 0.8rem;
  }
`;

export const Bars = styled(FaHamburger)`
  font-size: 1.5rem;
  transform: translate(45%, -5%);
`;

export const Cart = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 4rem;
  cursor: pointer;
  color: #fff;
`;

export const CartIcon = styled(RiShoppingCart2Fill)`
  font-size: 1.5rem;
  transform: translate(-90%, 80%);
`;
export const CartCounter = styled.div`
  display: block;
  position: absolute;
  top: 0.25rem;
  right: 0.75rem;
  font-size: 10px;
  background: #ff0000;
  color: #fff;
  vertical-align: bottom;
  width: 20px;
  height: 20px;
  background: red;
  border-radius: 50%;
  text-align: center;
`;
