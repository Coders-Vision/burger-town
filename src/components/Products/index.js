import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/cart/cartSlice";
import {
  ProductsContainer,
  ProductsHeading,
  ProductWrapper,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductTitle,
  ProductDesc,
  ProductButton,
  ProductButtonIcon,
  ProductPrice,
} from "./ProductElements";
function Products({ heading, data }) {
  const dispatch = useDispatch();
  const [addCart, setAddCart] = useState(null);

  const addToCart = () => {
    dispatch(addItem(addCart));
  };
  useEffect(() => {
    if (addCart) {
      addToCart();
    }
  }, [addCart]);

  return (
    <>
      <ProductsContainer>
        <ProductsHeading>{heading}</ProductsHeading>
        <ProductWrapper>
          {data.map((product, index) => {
            return (
              <ProductCard key={index}>
                <ProductImg src={product.imgName} alt={product.title} />
                <ProductInfo>
                  <ProductTitle>{product.title}</ProductTitle>
                  <ProductDesc>{product.desc}</ProductDesc>
                  <ProductPrice>{product.price}</ProductPrice>
                  <ProductButton
                    onClick={() =>
                      setAddCart({
                        ...product,
                        price: product.itemPrice,
                        qty: 1,
                      })
                    }
                  >
                    <ProductButtonIcon /> Add to Cart{" "}
                  </ProductButton>
                </ProductInfo>
              </ProductCard>
            );
          })}
        </ProductWrapper>
      </ProductsContainer>
    </>
  );
}

export default Products;
