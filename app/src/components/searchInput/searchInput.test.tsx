import { render } from "@testing-library/react";
import SearchInput from "./searchInput";

describe("Search Input complete component", () => {
  test("Should render component", () => {
    const { queryByTestId } = render(<SearchInput />);
    expect(queryByTestId("searchInputContainerTestId")).toBeTruthy();
  });
});
