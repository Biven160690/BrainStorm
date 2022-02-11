import { Dispatch, SetStateAction } from "react";
import { Params } from "react-router";

import { CardItems, DeckItems } from "../components/forms/interface";
import { Card, Decks } from "./interface";

export type GetSelectedCardsDeck = (id: string | undefined) => Card[] | undefined;

export type NewItems = CardItems | DeckItems;

export type UpdatingDecks = (newItems: NewItems, urlParams: Params) => void;

export type DecksState = {
  decks: Decks[];
  getSelectedCardsDeck: GetSelectedCardsDeck;
  updatingDecks: UpdatingDecks;
};

export type UpdatingState = (
  decks: Decks[],
  setDecks: { (value: SetStateAction<Decks[]>): void; (arg: any[]): void },
  setStatus: Dispatch<any>
) => UpdatingDecks;
