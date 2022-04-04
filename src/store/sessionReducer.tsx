import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SessionState {
    apiData: any[],
    userCart: any[],
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
    remProduct: (state: SessionState, action: any) => {
      state.apiData = action.payload;
    },
  },
});
export const { addProduct } = sessionSlice.actions;
export default sessionSlice.reducer;