import storySlice from "./storySlice";
import autoCompleteSlice from "./autoCompleteSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    story: storySlice.reducer,
    autoComplete: autoCompleteSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
