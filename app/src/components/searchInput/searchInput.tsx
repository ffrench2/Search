import axios from "axios";
import { useEffect, useState } from "react";
import "./searchInput.css";

const SearchInput = () => {
  const [querySearch, setQuerySearch] = useState("");

  useEffect(() => {
    if (querySearch.length >= 3) {
      axios
        .get("https://api.aylien.com/news/autocompletes", {
          headers: {
            "Content-Type": "application/json",
            "X-AYLIEN-NewsAPI-Application-ID": "0ded468e",
            "X-AYLIEN-NewsAPI-Application-Key":
              "d62de22539e8bbc572c2a6ab0eb19ed4",
          },
          params: {
            type: "dbpedia_resources",
            term: querySearch,
            language: "en",
            perPage: 3,
          },
        })
        .then(function (response) {
          console.log("response", response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [querySearch]);

  return (
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
  );
};

export default SearchInput;
