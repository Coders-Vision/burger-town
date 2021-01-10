import { React, useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Cart from "../Cart";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./HeroElements";

function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen);
  return (
    <HeroContainer>
      <Navbar toggleMenu={toggleMenu} toggleCart={toggleCart} />

      <Sidebar isMenuOpen={isMenuOpen} toggleMenu ={toggleMenu } />
      <Cart isCartOpen={isCartOpen} toggleCart={toggleCart} />

      <HeroContent>
        <HeroItems>
          <HeroH1>We flip the best Burgers in Town</HeroH1>
          <HeroP>Ready in 5 Minutes</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
