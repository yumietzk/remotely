import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import SearchBar from "../SearchBar";

const mockProps = {
  onSearch: jest.fn(),
};

describe("SearchBar component", () => {
  test("has text in the input field when user types and has no text when user clears", async () => {
    const user = userEvent.setup();

    render(<SearchBar {...mockProps} />);
    const input = screen.getByRole("textbox");

    // User types text
    await user.type(input, "frontend");

    expect(input).toHaveValue("frontend");

    // User clears text
    await user.clear(input);

    expect(input).toHaveValue("");
  });

  test("handles onSubmit event when form is submitted", () => {
    render(<SearchBar {...mockProps} />);

    const form = screen.getByRole("form", { name: "search" });
    fireEvent.submit(form);

    expect(mockProps.onSearch).toHaveBeenCalled();
  });
});
