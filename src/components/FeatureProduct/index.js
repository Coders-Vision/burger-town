import React from 'react'
import {FeatureProductContainer,FeatureButton} from "./FeatureProductElements"
function FeatureProduct() {
    return (
      <FeatureProductContainer>
          <h1>Burger of the Day</h1>
          <p>Oven Baked Burger</p>
          <FeatureButton>Order Now</FeatureButton>
      </FeatureProductContainer>
    )
}

export default FeatureProduct
