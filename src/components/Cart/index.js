import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addQty,
  removeQty,
  removeItem,
  getCart,
  getItemsCount,
  getTotalPrice,
} from "../../features/cart/cartSlice";
import {
  CartContainer,
  Icon,
  CloseIcon,
  CartItems,
  CartItem,
  CartTitle,
  ItemImage,
  ItemTitle,
  ProductButtonCounter,
  CounterBtn,
  ItemQty,
  ItemPrice,
  RemoveItem,
  ItemInCart,
  TotalPrice,
  TotalItems,
  CheckoutBtn,
  EmptyCart,
  EmptyCartMessage,
} from "./CartElements";
function Cart({ isCartOpen, toggleCart }) {
  const dispatch = useDispatch();
  const items = useSelector(getCart);
  const totalItem = useSelector(getItemsCount);
  const totalPrice = useSelector(getTotalPrice);
  const showItems = items.map((item, index) => {
    return (
      <CartItem key={index}>
        <ItemImage src={item.imgName}></ItemImage>
        <ItemTitle>{item.title}</ItemTitle>
        <ProductButtonCounter>
          <CounterBtn onClick={() => dispatch(removeQty(item.id))}>
            -
          </CounterBtn>
          <ItemQty>{item.qty}</ItemQty>
          <CounterBtn onClick={() => dispatch(addQty(item.id))}>+</CounterBtn>
        </ProductButtonCounter>
        <ItemPrice>{item.price}</ItemPrice>
        <RemoveItem onClick={() => dispatch(removeItem(item.id))} />
      </CartItem>
    );
  });

  return (
    <CartContainer isCartOpen={isCartOpen}>
      <Icon onClick={toggleCart}>
        <CloseIcon />
      </Icon>
      <CartTitle>My Order</CartTitle>
      {items.length > 0 ? (
        <>
          <CartItems>{showItems}</CartItems>
          <ItemInCart>
            <TotalItems>Items: {totalItem}</TotalItems>
            <TotalPrice>Total: {totalPrice}</TotalPrice>
          </ItemInCart>
          <CheckoutBtn>Checkout</CheckoutBtn>
        </>
      ) : (
        <EmptyCartMessage>
          {" "}
          <EmptyCart /> Your cart is empty
        </EmptyCartMessage>
      )}
    </CartContainer>
  );
}

export default Cart;
