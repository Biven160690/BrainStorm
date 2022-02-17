import { useState } from "react";

import { useUpdateState } from "./useUpdateState";

import { AlertProps, Deck } from "./interface";
import { GetSelectedCardsDeck, UpdateDecks } from "./type";

type DecksState = {
  getSelectedCardsDeck: GetSelectedCardsDeck;
  updateDecks: UpdateDecks;
  alertProps: AlertProps,
};

export function useDecksState(): DecksState {
  const [decks, setDecks] = useState<Deck[]>([]);

  const { updateDecks, alertProps } = useUpdateState(decks, setDecks);

  const getSelectedCardsDeck: GetSelectedCardsDeck = (id) => {
    if (typeof id === "string" && decks.length) {
      const elementsIndex: number = decks.findIndex((deck) => deck.id === +id);
      return decks[elementsIndex].cards;
    }
    return [];
  };

  return {
    getSelectedCardsDeck,
    updateDecks,
    alertProps,
  };
}
