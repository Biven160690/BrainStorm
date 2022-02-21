import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { DeleteCardForm } from "../deleteForms";

describe("DeleteCardForm component", () => {
  const onSubmit = jest.fn();
  const handleClickGoBack = jest.fn();

  const props = {
    handleClickGoBack,
    onSubmit,
  };

  it("render DeleteCardForm component", () => {
    render(<DeleteCardForm {...props} />);

    expect(screen.getByRole("button", { name: /cancel/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /delete/i })).toBeInTheDocument();
  });

  it("form submit should be successful", () => {
    render(<DeleteCardForm {...props} />);

    userEvent.click(screen.getByRole("button", { name: /delete/i }));

    expect(onSubmit).toBeCalled();
  });

  it("form  should be closed", () => {
    render(<DeleteCardForm {...props} />);

    userEvent.click(screen.getByRole("button", { name: /cancel/i }));

    expect(handleClickGoBack).toBeCalled();
  });
});
