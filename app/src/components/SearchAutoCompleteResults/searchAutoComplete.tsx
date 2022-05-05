import "./searchAutoComplete.css";
import { ISearchItemProps } from "./searchAutoComplete.interface";

export const SearchAutoComplete = (props: any) => {
  const clickHandler = (text: string) => {
    console.log(text);
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
