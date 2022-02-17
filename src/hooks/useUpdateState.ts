import { Dispatch, SetStateAction } from "react";

import { useUpdateDataBaseData } from "./useUpdateDataBaseData";
import { useUpdateLocalState } from "./useUpdateLocalState";

import { addIdtoNewCard, addIdtoNewDeck } from "../helper/helperFunctions";

import { UpdateDecks } from "./type";
import { AlertProps, Card, Deck } from "./interface";

type UpdateState = (
  decks: Deck[],
  setDecks: Dispatch<SetStateAction<Deck[]>>
) => {
  updateDecks: UpdateDecks;
  alertProps: AlertProps;
};

export const useUpdateState: UpdateState = (decks, setDecks) => {
  const { updateDeck, updateCard, removeDeck, removeCard, ...alertProps } = useUpdateDataBaseData();
    
  const { addCard, addDeck, deleteDeck, deleteCard } = useUpdateLocalState(decks, setDecks);
    
  const updateDecks: UpdateDecks = (urlParams, newItems) => {
    if (newItems && "description" in newItems) {
      const newDeck: Deck = addIdtoNewDeck(newItems);
      addDeck(newDeck);
      updateDeck(newDeck);
    }

    if (urlParams.deckId) {
      switch (urlParams.action) {
        case "delete-deck":
          deleteDeck(urlParams.deckId);
          removeDeck(urlParams.deckId);
          break;
        case "add-card":
          if (newItems && "translation" in newItems) {
            const newCard: Card = addIdtoNewCard(newItems);
            addCard(urlParams.deckId, newCard);
            updateCard(urlParams.deckId, newCard);
          }
          break;
        case "delete-card":
          if (urlParams.cardId) {
            deleteCard(urlParams.deckId, urlParams.cardId);
            removeCard(urlParams.deckId, urlParams.cardId);
          }
          break;
      }
    }
  };

  return {
    updateDecks,
    alertProps,
  };
};
