import data from "./assets/data";
import { createSlice } from "@reduxjs/toolkit";

// slice 생성

export const menuSlice = createSlice({
  name: "menu",
  initialState: DataTransfer.menu,
  reducers: {},
});

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      return [...state, action.payload];
    },
    removeFromCart(state, action) {
      return state.filter((el) => action.payload !== el.id);
    },
  },
});

// 액션과 리듀서 export
export const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
    cart: cartSlice.reducer,
  },
});
