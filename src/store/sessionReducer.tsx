import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../model/product";

export interface SessionState {
  apiData: any[],
  userCart: IProduct[],
}

const initialState: SessionState = {
  apiData: [],
  userCart: [],
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    addProduct: (state: SessionState, action: any) => {
      state.userCart.push(action.payload);
    },
    updateProduct: (state: SessionState, action: any) => {
      state.userCart = state.userCart.map((e) => {
        if (e.id === action.payload.id) {
          e.amount = action.payload.amount;
        }
        return e;
      })
    },
    remProduct: (state: SessionState, action: any) => {
      state.apiData = action.payload;
    },
  },
});
export const { addProduct, updateProduct } = sessionSlice.actions;
export default sessionSlice.reducer;