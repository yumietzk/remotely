import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Button from "../Button";

const mockProps = {
  children: "Filters",
  classes: "",
  type: "button",
  handleClick: jest.fn(),
  disabled: false,
};

describe("Button component", () => {
  test("should render text passed as a prop", () => {
    render(<Button {...mockProps} />);

    const buttonText = screen.getByText("Filters");
    expect(buttonText).toBeInTheDocument();
  });

  test("should handle onClick event when users click the button", async () => {
    const user = userEvent.setup();

    render(<Button {...mockProps} />);

    const button = screen.getByRole("button");
    expect(button).toBeEnabled();

    await user.click(button);

    expect(mockProps.handleClick).toHaveBeenCalled();
  });

  test("should disable the button when the disabled prop is true", () => {
    render(<Button {...mockProps} disabled={true} />);

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
});
