import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SessionState {
    apiData: any[]
}

const initialState: SessionState = {
    apiData: [],

};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setFetchedData: (state: SessionState, action: any) => {
      state.apiData = action.payload;
    },
  },
});
export const { setFetchedData } = sessionSlice.actions;
export default sessionSlice.reducer;