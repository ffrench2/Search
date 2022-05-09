import { render } from "@testing-library/react";
import SearchAutoComplete from "./searchAutoComplete";

const mocks = [
  { id: "123", text: "autocomplete data" },
  { id: "1234", text: "autocomplete data1" },
  { id: "1233", text: "autocomplete data2" },
];

describe("Search Auto complete component", () => {
  test("Should NOT render component", () => {
    const { queryByTestId } = render(
      <SearchAutoComplete autoCompleteData={mocks} />
    );
    expect(queryByTestId("SearchAutoCompleteContainerTestId")).toBeFalsy();
  });
});
