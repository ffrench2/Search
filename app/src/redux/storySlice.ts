import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IStoreis {
  stories: any[];
}

const initialState: IStoreis = {
  stories: [],
};

const storySlice = createSlice({
  name: "stories",
  initialState: initialState,
  reducers: {
    setStory(state, action: PayloadAction<any[]>) {
      state.stories = action.payload;
    },
  },
});

export default storySlice;
