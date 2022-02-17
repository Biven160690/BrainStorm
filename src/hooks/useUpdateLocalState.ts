import { Dispatch, SetStateAction } from "react";

import { createCard, removeCard, removeDeck } from "../helper/helperFunctions";

import { Card, Deck } from "./interface";

type UpdateLocalState = (decks: Deck[], setDecks: Dispatch<SetStateAction<Deck[]>> ) => {
  addCard: (deckId: string, card: Card) => void
  addDeck: (deck: Deck) => void
  deleteCard: (deckId: string, cardId: string) => void
  deleteDeck: (deckId: string) => void
}

export const useUpdateLocalState: UpdateLocalState = (decks, setDecks) => {

  function addCard(deckId: string, newCard: Card) {
    const newDecks: Deck[] = createCard(decks, deckId, newCard);
    setDecks(newDecks);
  }

  function addDeck(newDeck: Deck) {
    setDecks([...decks, newDeck]);
  }

  function deleteCard(deckId: string, cardId: string) {
    const newDecks: Deck[] = removeCard(decks, deckId, cardId);
    setDecks(newDecks);
  }

  function deleteDeck(deckId: string) {
    const newDecks: Deck[] = removeDeck(decks, deckId);
    setDecks(newDecks);
  }
  
  return {
    addCard,
    addDeck,
    deleteCard,
    deleteDeck
  }
}
