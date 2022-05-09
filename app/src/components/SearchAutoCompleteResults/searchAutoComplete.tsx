import { useAppDispatch } from "../../hooks";
import {
  emptyAutoCompleteResponse,
  getStoriesResponse,
} from "../../redux/story-actions";
import "./searchAutoComplete.css";
import {
  ISearchAutoCompleteProps,
  ISearchItemProps,
} from "./searchAutoComplete.interface";

export const SearchAutoComplete = (props: ISearchAutoCompleteProps) => {
  const dispatch = useAppDispatch();
  const clickHandler = (text: string) => {
    dispatch(getStoriesResponse(text));
    dispatch(emptyAutoCompleteResponse());
  };

  if (!!props.autoCompleteData && props.autoCompleteData.length) {
    return (
      <div
        className="SearchAutoCompleteContainer"
        data-testid={"SearchAutoCompleteContainerTestId"}
      >
        {props.autoCompleteData.map((item: ISearchItemProps) => {
          return (
            <div
              onClick={() => clickHandler(item.text)}
              key={item.id}
              className="autoCompleteData"
            >
              {item.text}
            </div>
          );
        })}
      </div>
    );
  }
  return null;
};

export default SearchAutoComplete;
