import { Params } from "react-router";

import { DataManagment } from "../helper/interlayer";
import {
  creatingCard,
  creatingDeck,
  removingCard,
  removingDeck,
} from "../helper/helperFunctions";
import { Decks } from "./interface";
import { NewItems, UpdatingDecks, UpdatingState } from "./type";
import { CardItems, DeckItems } from "../components/forms/interface";

const useUpdatingState: UpdatingState = (decks, setDecks, setStatus) => {
  // const dataManagment: DataManagment = new DataManagment();

  function addCard(deckId: string, data: CardItems) {
    const newState: Decks[] = creatingCard(decks, deckId, data);
    setDecks(newState);
  }

  function addDeck(data: DeckItems) {
    const newDeck: Decks = creatingDeck(data);
    setDecks([...decks, newDeck]);
  }

  const deleteCard = (deckId: string, cardId: string): void => {
    const newDecks: Decks[] = removingCard(decks, deckId, cardId);
    setDecks(newDecks);
  };

  const deleteDeck = (deckId: string): void => {
    const newDecks: Decks[] = removingDeck(decks, deckId);
    setDecks(newDecks);
  };

  function changingDecks(newItems: NewItems, urlParams: Params): void {
    if ("description" in newItems) {
      addDeck(newItems);
      // dataManagment.addDeck(newItems, setStatus);
    }

    if (urlParams.deckId) {
      switch (urlParams.action) {
        case "deleteDeck":
          deleteDeck(urlParams.deckId);
          // dataManagment.deleteDeck(deckId, setStatus);
          break;
        case "addCard":
          if ("translation" in newItems) {
            addCard(urlParams.deckId, newItems);
            // dataManagment.addDeck(newItems, setStatus);
          }
          break;
        case "deleteCard":
          if (urlParams.cardId) {
            deleteCard(urlParams.deckId, urlParams.cardId);
            // dataManagment.deleteCard(deckId, cardId, setStatus);
          }
          break;
      }
    }
  }

  const updatingDecks: UpdatingDecks = (newItems, urlParams) => {
    changingDecks(newItems, urlParams);
  };

  return updatingDecks;
};

export default useUpdatingState;