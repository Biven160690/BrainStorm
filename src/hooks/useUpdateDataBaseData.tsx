import { Dispatch, SetStateAction, useState } from "react";

import { DataManagement } from "../helper/interlayer";

import { Card, Deck } from "./interface";
import { StatusItem } from "../helper/interface";

interface UpdateDataBaseData {
  updateDeck: (deck: Deck) => void;
  updateCard: (deckId: string, card: Card) => void;
  removeDeck: (deckId: string) => void;
  removeCard: (deckId: string, cardId: string) => void;
  status: StatusItem | undefined;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function useUpdateDataBaseData(): UpdateDataBaseData {
  const [status, setStatus] = useState<StatusItem | undefined>();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dataManagement: DataManagement = new DataManagement();

  const updateDeck = (deck: Deck) => {
    try {
      const status = dataManagement.addDeck(deck);
      setStatus(status);
      setIsOpen(true);
    } catch (error) {
      if (error instanceof Error) {
        setStatus(error);
        setIsOpen(true);
      }
    }
  };

  const updateCard = (deckId: string, card: Card) => {
    try {
      const status = dataManagement.addCard(deckId, card);
      setStatus(status);
      setIsOpen(true);
    } catch (error) {
      if (error instanceof Error) {
        setStatus(error);
        setIsOpen(true);
      }
    }
  };

  const removeDeck = (deckId: string) => {
    try {
      const status = dataManagement.deleteDeck(deckId);
      setStatus(status);
      setIsOpen(true);
    } catch (error) {
      if (error instanceof Error) {
        setStatus(error);
        setIsOpen(true);
      }
    }
  };

  const removeCard = (deckId: string, cardId: string) => {
    try {
      const status = dataManagement.deleteCard(deckId, cardId);
      setStatus(status);
      setIsOpen(true);
    } catch (error) {
      if (error instanceof Error) {
        setStatus(error);
        setIsOpen(true);
      }
    }
  };

  return {
    updateDeck,
    updateCard,
    removeDeck,
    removeCard,
    status,
    isOpen,
    setIsOpen,
  };
}
