import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    itemCount: 0,
    total: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const cart = [...state.items];
      const check = state.items.some((item) => item.id === action.payload.id);
      if (check === false) {
        let price = state.total + action.payload.price;
        let count = state.itemCount + action.payload.qty;
        return {
          ...state,
          itemCount: count,
          total: price,
          items: [...cart, action.payload],
        };
      }
    },
    removeItem: (state, action) => {
      const cart = [...state.items];
      const removed = cart.filter((cart) => cart.id !== action.payload);
      let newItemCount = removed.reduce((val, index) => val + index.qty, 0);
      let newTotalAmount = removed.reduce(
        (val, index) => val + parseFloat(index.price),
        0
      );

      return {
        ...state,
        items: [...removed],
        itemCount: newItemCount,
        total: newTotalAmount,
      };
    },
    addQty: (state, action) => {
      const getQty = state.items.find((item) => item.id === action.payload).qty;
      let qty = getQty + 1;
      const updated = state.items.map((item) =>
        item.id === action.payload
          ? { ...item, price: (item.itemPrice * qty).toFixed(2), qty: qty }
          : item
      );
      let newItemCount = updated.reduce((val, index) => val + index.qty, 0);
      let newTotalAmount = updated.reduce(
        (val, index) => val + parseFloat(index.price),
        0
      );
      return {
        ...state,
        items: updated,
        itemCount: newItemCount,
        total: newTotalAmount,
      };
    },
    removeQty: (state, action) => {
      const getQty = state.items.find((item) => item.id === action.payload).qty;
      let qty = getQty - 1;
      if (qty > 0) {
        const updated = state.items.map((item) =>
          item.id === action.payload
            ? { ...item, price: item.itemPrice * qty, qty: qty }
            : item
        );
        let newItemCount = updated.reduce((val, index) => val + index.qty, 0);
        let newTotalAmount = updated.reduce(
          (val, index) => val + parseFloat(index.price),
          0
        );
        return {
          ...state,
          items: updated,
          itemCount: newItemCount,
          total: newTotalAmount,
        };
      }
    },
  },
});

export const { addItem, removeItem, addQty, removeQty } = cartSlice.actions;

export const getCart = (state) => state.cart.items;
export const getItemsCount = (state) => state.cart.itemCount;
export const getTotalPrice = (state) => state.cart.total;
export default cartSlice.reducer;
