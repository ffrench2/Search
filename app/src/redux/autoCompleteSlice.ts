import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAutoComplete {
  autoCompletes: any[];
}

const initialState: IAutoComplete = {
  autoCompletes: [],
};

const autoCompleteSlice = createSlice({
  name: "autoComplete",
  initialState: initialState,
  reducers: {
    setAutoComplete(state, action: PayloadAction<any[]>) {
      state.autoCompletes = action.payload;
    },
    emptyAutoComplete(state) {
      state.autoCompletes = [];
    },
  },
});

export default autoCompleteSlice;
