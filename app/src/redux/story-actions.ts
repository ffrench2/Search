import storySlice from "./storySlice";
import autoCompleteSlice from "./autoCompleteSlice";
import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { getAutoComplete, getStories } from "../service/storyService";

export const storyActions = storySlice.actions;
export const autoCompleteActions = autoCompleteSlice.actions;

export const getAutoCompleteResponse = (
  value: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    const response: any = await getAutoComplete(value);
    dispatch(autoCompleteActions.setAutoComplete(response));
  };
};

export const emptyAutoCompleteResponse = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch) => {
    dispatch(autoCompleteActions.emptyAutoComplete());
  };
};

export const getStoriesResponse = (
  value: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    const response: any = await getStories(value);
    dispatch(storyActions.setStory(response));
  };
};
