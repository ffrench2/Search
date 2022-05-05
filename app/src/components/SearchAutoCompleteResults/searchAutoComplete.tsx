import "./searchAutoComplete.css";
import {
  ISearchAutoCompleteProps,
  ISearchItemProps,
} from "./searchAutoComplete.interface";

export const SearchAutoComplete = (props: ISearchAutoCompleteProps) => {
  if (!!props.autoCompleteData && props.autoCompleteData.length) {
    return (
      <div
        className="SearchAutoCompleteContainer"
        data-testid={"SearchAutoCompleteContainerTestId"}
      >
        {props.autoCompleteData.map((item: ISearchItemProps) => {
          return (
            <div key={item.id} className="autoCompleteData">
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
