import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { AddCardForm } from "../addForms";

describe("AddCardForm component", () => {
  const onSubmit = jest.fn();
  const handleClickGoBack = jest.fn();

  const props = {
    handleClickGoBack,
    onSubmit,
  };

  it("render AddCardForm component", () => {
    render(<AddCardForm {...props} />);

    expect(screen.getByRole("textbox", { name: /new word/i })).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /translation/i })
    ).toBeInTheDocument();
  });

  it("form submit should be successful when each input has data", async () => {
    render(<AddCardForm {...props} />);

    userEvent.type(screen.getByRole("textbox", { name: /new word/i }), "cat");
    userEvent.type(
      screen.getByRole("textbox", { name: /translation/i }),
      "dog"
    );
    userEvent.click(screen.getByRole("button", { name: /save/i }));

    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith({
        'new word': "cat",
        translation: "dog",
      })
    );
  });

  it("should display error when input 'new word' empty", () => {
    render(<AddCardForm {...props} />);

    userEvent.type(
      screen.getByRole("textbox", { name: /translation/i }),
      "dog"
    );
    userEvent.click(screen.getByRole("button", { name: /save/i }));

    expect(onSubmit).not.toBeCalled();
  });

  it("should display error when input 'translation' empty", () => {
    render(<AddCardForm {...props} />);

    userEvent.type(screen.getByRole("textbox", { name: /new word/i }), "dog");
    userEvent.click(screen.getByRole("button", { name: /save/i }));

    expect(onSubmit).not.toBeCalled();
  });

  it("should display error when each input is empty", () => {
    render(<AddCardForm {...props} />);

    userEvent.click(screen.getByRole("button", { name: /save/i }));

    expect(onSubmit).not.toBeCalled();
  });
  
  it("form  should be closed", () => {
    render(<AddCardForm {...props} />);

    userEvent.click(screen.getByRole("button", { name: /cancel/i }));

    expect(handleClickGoBack).toBeCalled();
  });
});
