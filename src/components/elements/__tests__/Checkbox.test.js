import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Checkbox from "../Checkbox";

const mockProps = {
  label: "React",
  isChecked: false,
  handleCheck: jest.fn(),
};

describe("Checkbox component", () => {
  test("initial conditions", () => {
    render(<Checkbox {...mockProps} />);

    // Check if the checkbox is not checked
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
  });

  test("should render lable passed as a prop", () => {
    render(<Checkbox {...mockProps} />);

    const label = screen.getByLabelText("React");
    expect(label).toBeInTheDocument();
  });

  test("should be checked and handle onChange event when users click", async () => {
    const user = userEvent.setup();

    const { rerender } = render(<Checkbox {...mockProps} />);

    const checkbox = screen.getByRole("checkbox");
    await user.click(checkbox);

    rerender(<Checkbox {...mockProps} isChecked={true} />);

    expect(checkbox).toBeChecked();
    expect(mockProps.handleCheck).toHaveBeenCalled();
  });
});
