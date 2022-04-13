import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../model/product";

export interface SessionState {
  userCart: IProduct[];
  totalSum: number;
}

const initialState: SessionState = {
  userCart: [],
  totalSum: 0,
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    addProduct: (state: SessionState, action: PayloadAction<IProduct>) => {
      state.userCart.push(action.payload);
    },
    updateProduct: (state: SessionState, action: PayloadAction<IProduct>) => {
      state.userCart = state.userCart.map((element) => {
        if (element.id === action.payload.id) {
          element.amount = action.payload.amount;
        }
        return element;
      });
    },
    updateTotalSum: (state: SessionState, action: PayloadAction<number>) => {
      state.totalSum = action.payload;
    },
  },
});
export const { addProduct, updateProduct, updateTotalSum } =
  sessionSlice.actions;
export default sessionSlice.reducer;
