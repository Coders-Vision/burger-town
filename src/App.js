import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import FeatureProduct from "./components/FeatureProduct";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Footer from "./components/Footer";
import { mainProducts, sideProducts } from "./data/Data";
import { GlobalStyle } from "./globalStyles";
function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyle />
        <Hero />
        <Products
          heading="Choose your favourite Burger"
          data={mainProducts}
        ></Products>
        <FeatureProduct />
        <Products  heading="Your tasty Dessert" data={sideProducts}></Products>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
