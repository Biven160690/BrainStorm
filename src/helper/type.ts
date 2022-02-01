import { FieldError } from "react-hook-form";
import { CardItems, DeckItems } from "../components/forms/interface";
import { Decks } from "../hooks/interface";
import { InputProps } from "./interface";

export type CreateInputsProps = (
  errors: { [x: string]: FieldError },
  form: string
) => InputProps;

export type CreatingCard = (
  decks: Decks[],
  deckId: string,
  data: CardItems
) => Decks[];

export type CreatingDeck = (data: DeckItems) => Decks;

export type RemovingCard = (
  decks: Decks[],
  deckId: string,
  cardId: string
) => Decks[];

export type RemovingDeck = (decks: Decks[], deckId: string) => Decks[];
