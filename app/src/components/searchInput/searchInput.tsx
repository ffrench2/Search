import { useEffect, useState } from "react";
import SearchAutoComplete from "../SearchAutoCompleteResults/searchAutoComplete";
import "./searchInput.css";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getAutoCompleteResponse } from "../../redux/story-actions";

const SearchInput = () => {
  const dispatch = useAppDispatch();

  const autoComplete = useAppSelector(
    (state) => state.autoComplete.autoCompletes
  );
  const [querySearch, setQuerySearch] = useState("");

  useEffect(() => {
    if (querySearch.length >= 3) {
      dispatch(getAutoCompleteResponse(querySearch));
    }
  }, [querySearch, dispatch]);

  return (
    <>
      <div className="searchInputContainer">
        <form className="form" action="/" method="get">
          <input
            className="input"
            type="text"
            id="SearchInput"
            placeholder="Companies, Organisations, People or Places"
            name="search"
            onChange={(event) => setQuerySearch(event.target.value)}
          />
          <button type="submit">SEARCH</button>
        </form>
      </div>
      <SearchAutoComplete autoCompleteData={autoComplete} />
    </>
  );
};

export default SearchInput;
