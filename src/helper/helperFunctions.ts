import { FieldError } from "react-hook-form";

import { CardItem, DeckItem } from "../../../copy/src/components/forms/type";
import { Card, Deck } from "../../../copy/src/hooks/interface";
import { InputProps } from "./interface";

 type CreateInputsProps = (
  errors: { [x: string]: FieldError },
  form: string
) => InputProps;

 type CreateCard = (
  decks: Deck[],
  deckId: string,
  data: Card
) => Deck[];

type RemoveCard = (
  decks: Deck[],
  deckId: string,
  cardId: string
) => Deck[];

type RemoveDeck = (decks: Deck[], deckId: string) => Deck[];

type AddIdtoNewCard = (data: CardItem) => Card

type AddIdtoNewDeck = (data: DeckItem) => Deck


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

const addIdtoNewCard: AddIdtoNewCard = (data) => {
    const newElement: Card = { id: +new Date(), ...data };
    return newElement;
};

const addIdtoNewDeck: AddIdtoNewDeck = (data) => {
  const newElement: Deck = { id: +new Date(), ...data, cards: [] };
  return newElement;
};

const createCard: CreateCard = (decks, deckId, newCard) => {
  const newState: Deck[] = [...decks];
  const elementsIndex: number = decks.findIndex((deck) => deck.id === +deckId);
  newState[elementsIndex] = {
    ...newState[elementsIndex],
    cards: [...newState[elementsIndex].cards, newCard],
  };
  return newState;
};

const removeCard: RemoveCard = (decks, deckId, cardId) => {
  const newState: Deck[] = [...decks];
  const elementsIndex: number = decks.findIndex((deck) => deck.id === +deckId);
  const cards: Card[] = newState[elementsIndex].cards;
  const updatedCardsDeck: Card[] = cards.filter((card) => card.id !== +cardId);
  newState[elementsIndex] = {
    ...newState[elementsIndex],
    cards: updatedCardsDeck,
  };
  return newState;
};

const removeDeck: RemoveDeck = (decks, deckId) => {
  const newState: Deck[] = [...decks];
  const updatedState: Deck[] = newState.filter((deck) => deck.id !== +deckId);
  return updatedState;
};

export {
  createInputsProps,
  createCard,
  removeCard,
  removeDeck,
  addIdtoNewCard,
  addIdtoNewDeck
};
