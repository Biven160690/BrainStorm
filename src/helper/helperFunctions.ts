import { FieldError } from "react-hook-form";

import { Card, Decks } from "../hooks/interface";
import { InputProps } from "./interface";
import {
  CreateInputsProps,
  CreatingCard,
  CreatingDeck,
  RemovingCard,
  RemovingDeck,
} from "./type";

const createInputsProps: CreateInputsProps = (errors, form) => {
  const isValidForm: FieldError = errors[form || ""];
  const label: string = form.replace(/(^\w{1})/, (letter) =>
    letter.toUpperCase()
  );
  const inputProps: InputProps = {
    label: label,
    error: !!isValidForm,
    variant: "outlined",
    helperText: isValidForm && "This field is required",
  };

  return inputProps;
};

const creatingCard: CreatingCard = (decks, deckId, data) => {
  const newState: Decks[] = [...decks];
  const elementsIndex: number = decks.findIndex((deck) => deck.id === +deckId);
  const newCard: Card = { id: +new Date(), ...data };
  newState[elementsIndex] = {
    ...newState[elementsIndex],
    cards: [...newState[elementsIndex].cards, newCard],
  };
  return newState;
};

const creatingDeck: CreatingDeck = (data) => {
  const newDeck: Decks = { id: +new Date(), ...data, cards: [] };
  return newDeck;
};

const removingCard: RemovingCard = (decks, deckId, cardId) => {
  const newState: Decks[] = [...decks];
  const elementsIndex: number = decks.findIndex((deck) => deck.id === +deckId);
  const cards: Card[] = newState[elementsIndex].cards;
  const updatedCardsDeck: Card[] = cards.filter((card) => card.id !== +cardId);
  newState[elementsIndex] = {
    ...newState[elementsIndex],
    cards: updatedCardsDeck,
  };
  return newState;
};

const removingDeck: RemovingDeck = (decks, deckId) => {
  const newState: Decks[] = [...decks];
  const updatedState: Decks[] = newState.filter((deck) => deck.id !== +deckId);
  return updatedState;
};

export {
  createInputsProps,
  creatingCard,
  creatingDeck,
  removingCard,
  removingDeck,
};
