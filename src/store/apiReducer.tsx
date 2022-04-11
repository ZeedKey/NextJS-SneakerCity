import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../model/product";

export interface ApiState {
  apiData : any,
  userData: any
}

const initialState: ApiState = {
  apiData: [],
  userData: []
};

export const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    changeData: (state: ApiState, action: any) => {
      state.apiData = action.payload;
    },
    changeUserData: (state: ApiState, action: any) => {
      state.userData = action.payload;
    },
  },
});
export const { changeData,changeUserData } = apiSlice.actions;
export default apiSlice.reducer;