export const SearchAutoComplete = (props: any) => {
  if (!!props.items && props.items.length) {
    return (
      <div
        className="SearchAutoCompleteContainer"
        data-testid={"SearchAutoCompleteContainerTestId"}
      >
        this is auto complete
      </div>
    );
  }
  return null;
};

export default SearchAutoComplete;
