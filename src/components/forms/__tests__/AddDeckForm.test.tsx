import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { AddDeckForm } from "../addForms";

describe("AddDeckForm component", () => {
  const onSubmit = jest.fn();
  const handleClickGoBack = jest.fn();

  const props = {
    handleClickGoBack,
    onSubmit,
  };

  it("render AddDeckForm component", () => {
    render(<AddDeckForm {...props} />);

    expect(screen.getByRole("textbox", { name: /title/i })).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /description/i })
    ).toBeInTheDocument();
  });

  it("form submit should be successful when each input has data", async () => {
    render(<AddDeckForm {...props} />);

    userEvent.type(screen.getByRole("textbox", { name: /title/i }), "cat");
    userEvent.type(
      screen.getByRole("textbox", { name: /description/i }),
      "dog"
    );
    userEvent.click(screen.getByRole("button", { name: /save/i }));

    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith({
        title: "cat",
        description: "dog",
      })
    );
  });

  it("should display error when input 'title' empty", () => {
    render(<AddDeckForm {...props} />);

    userEvent.type(
      screen.getByRole("textbox", { name: /description/i }),
      "dog"
    );
    userEvent.click(screen.getByRole("button", { name: /save/i }));

    expect(onSubmit).not.toBeCalled();
  });

  it("should display error when input 'description' empty", () => {
    render(<AddDeckForm {...props} />);

    userEvent.type(screen.getByRole("textbox", { name: /title/i }), "dog");
    userEvent.click(screen.getByRole("button", { name: /save/i }));

    expect(onSubmit).not.toBeCalled();
  });

  it("should display error when each input is empty", () => {
    render(<AddDeckForm {...props} />);

    userEvent.click(screen.getByRole("button", { name: /save/i }));

    expect(onSubmit).not.toBeCalled();
  });
  
});
