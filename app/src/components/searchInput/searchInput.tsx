import { useEffect, useState } from "react";
import SearchAutoComplete from "../SearchAutoCompleteResults/searchAutoComplete";
import "./searchInput.css";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  emptyAutoCompleteResponse,
  getAutoCompleteResponse,
  getStoriesResponse,
} from "../../redux/story-actions";

const SearchInput = () => {
  const dispatch = useAppDispatch();

  const autoComplete = useAppSelector(
    (state) => state.autoComplete.autoCompletes
  );
  const [querySearch, setQuerySearch] = useState("");

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      handleSubmit(querySearch);
    }
  };

  useEffect(() => {
    if (querySearch.length >= 3) {
      dispatch(getAutoCompleteResponse(querySearch));
    }
  }, [querySearch, dispatch]);

  const handleSubmit = (querySearch: string) => {
    dispatch(getStoriesResponse(querySearch));
    dispatch(emptyAutoCompleteResponse());
  };

  return (
    <>
      <div
        data-testid={"searchInputContainerTestId"}
        className="searchInputContainer"
      >
        <div className="form">
          <input
            onKeyDown={(event) => onKeyDown(event)}
            data-testid={"searchInputTestId"}
            className="input"
            type="text"
            id="SearchInput"
            placeholder="Companies, Organisations, People or Places"
            name="search"
            onChange={(event) => setQuerySearch(event.target.value)}
          />
          <button
            data-testid={"searchInputSubmitButtonTestId"}
            onClick={() => handleSubmit(querySearch)}
          >
            SEARCH
          </button>
        </div>
      </div>
      <SearchAutoComplete autoCompleteData={autoComplete} />
    </>
  );
};

export default SearchInput;
