import { Decks } from "../../hooks/interface";
import { GetSelectedCardsDeck, UpdatingDecks } from "../../hooks/type";

export type FlashCardsCollectionProps = {
  getSelectedCardsDeck: GetSelectedCardsDeck;
  updatingDecks: UpdatingDecks;
};

export type FlashCardsDeckCollectionProps = {
  decks: Decks[];
  updatingDecks: UpdatingDecks;
};

export type Params = { deckId: string };
