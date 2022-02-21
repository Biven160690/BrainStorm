import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import { AddDeckForm, AddCardForm } from "../../forms/addForms";
import { DeleteDeckForm, DeleteCardForm } from "../../forms/deleteForms";
import { Modal } from "../Modal";


describe("Modal component", () => {
  const handleClickGoBack = jest.fn();

  const isOpenModal = true;

  const formProps = {
    handleClickGoBack: jest.fn(),
    onSubmit: jest.fn(),
  };

  it("Modal component get addDeckForm component", () => {
    const header = "You are creating new deck.";
    
    const children = <AddDeckForm {...formProps} />;

    render(
      <MemoryRouter>
        <Modal
          header={header}
          handleClickGoBack={handleClickGoBack}
          isOpenModal={isOpenModal}
        >
          {children}
        </Modal>
      </MemoryRouter>
    );

    expect(
      screen.getByRole("dialog", { name: /you are creating new deck./i })
    ).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /title/i })).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /description/i })
    ).toBeInTheDocument();
  });

  it("Modal component get addCardForm component", () => {
    const header = "You are creating new card in deck.";

    const children = <AddCardForm {...formProps} />;

    render(
      <MemoryRouter>
        <Modal
          header={header}
          handleClickGoBack={handleClickGoBack}
          isOpenModal={isOpenModal}
        >
          {children}
        </Modal>
      </MemoryRouter>
    );

    expect(
      screen.getByRole("dialog", {
        name: /you are creating new card in deck./i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /new word/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /translation/i })
    ).toBeInTheDocument();
  });

  it("Modal component get DeleteCardForm component", () => {
    const header = "Are you sure you want to delete this Card.";

    const children = <DeleteCardForm {...formProps} />;

    render(
      <MemoryRouter>
        <Modal
          header={header}
          handleClickGoBack={handleClickGoBack}
          isOpenModal={isOpenModal}
        >
          {children}
        </Modal>
      </MemoryRouter>
    );

    expect(
      screen.getByRole("dialog", {
        name: /are you sure you want to delete this card./i,
      })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /delete/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /cancel/i })).toBeInTheDocument();
  });

  it("Modal component get DeleteDeckForm component", () => {    
    const header = "Are you sure you want to delete this Deck.";
    
    const children = <DeleteDeckForm {...formProps} />;

    render(
      <MemoryRouter>
        <Modal
          header={header}
          handleClickGoBack={handleClickGoBack}
          isOpenModal={isOpenModal}
        >
          {children}
        </Modal>
      </MemoryRouter>
    );

    expect(
      screen.getByRole("dialog", {
        name: /are you sure you want to delete this deck./i,
      })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /delete/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /cancel/i })).toBeInTheDocument();
  });
});
