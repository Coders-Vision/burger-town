import styled from "styled-components";
import { FaTimes, FaTrash } from "react-icons/fa";
import { MdRemoveShoppingCart } from "react-icons/md";

export const CartContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 420px;
  height: 100%;
  background: #ffc500;
  user-select: none;

  top: 0;
  transition: 0.2s ease-in-out;
  left: ${({ isCartOpen }) => (!isCartOpen ? "-1000px" : "0px")};
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #000;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  left: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const CartTitle = styled.h1`
  margin-top: 3rem;
  text-align: center;
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  max-height: 350px;
  overflow-y: scroll;
  /*Scroll bar nav*/
  ::-webkit-scrollbar {
    width: auto;
  }
`;
export const CartItem = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-items: center;
  align-items: center;
  border-bottom: 0.25px solid rgba(0, 0, 0, 0.15);
  padding-bottom: 0.5rem;
`;
export const ItemImage = styled.img`
  min-width: clamp(0.5rem, 2vw, 2rem);
  max-width: 15%;
  box-shadow: 4px 4px #ff0000;
  background-position: center;
  background-size: cover;
  margin-right: 5%;
  flex: 0 0 100%;
`;
export const ItemTitle = styled.h5`
  font-size: clamp(0.7rem, 2vw, 0.8rem);
  flex: 0 0 25%;
  margin-right: 2%;
`;
export const ProductButtonCounter = styled.div`
  display: flex;
  margin-top: 0.2rem;
  flex: 0 0 30%;
`;
export const CounterBtn = styled.button`
  font-size: clamp(0.2rem, 5vw, 1.25rem);
  border: none;
  background: #990000;
  color: #fff;
  transition: 0.2s ease-out;
  height: clamp(1.25rem, 10vw, 2rem);
  width: clamp(1.25rem, 10vw, 2rem);
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  border-radius: 3px;
  outline: none;

  &:hover {
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
export const ItemQty = styled.div`
  font-size: clamp(1rem, 2vw, 1rem);
  text-align: center;
`;
export const ItemPrice = styled.h4`
  font-size: clamp(0.75rem, 2vw, 0.8rem);
  flex: 0 0 5%;
`;
export const RemoveItem = styled(FaTrash)`
  color: black;
  font-size: clamp(1rem, 10vw, 1.25rem);
  cursor: pointer;
  flex: 0 0 10%;
  &:hover {
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
export const EmptyCartMessage = styled.h1`
  text-align: center;
  margin-top: 50%;
  font-family: sans-serif;
  user-select: none;
  font-size: clamp(0.5rem, 10vw, 1.5rem);
`;
export const EmptyCart = styled(MdRemoveShoppingCart)`
  font-size: clamp(0.5rem, 10vw, 1.5rem);
`;
export const ItemInCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 1.5rem;
`;
export const TotalPrice = styled.h3`
  font-size: clamp(0.5rem, 5vw, 1rem);
`;
export const TotalItems = styled.h3`
  font-size: clamp(0.5rem, 5vw, 1rem);
`;

export const CheckoutBtn = styled.button`
  margin-top: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;
  margin-left:25%;

  &:hover {
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
