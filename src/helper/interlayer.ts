import { Card, Deck } from "../../../copy/src/hooks/interface";
import { StatusItem } from "./interface";

import {
  createCard,
  removeCard,
  removeDeck,
} from "./helperFunctions";

export class DataManagement {
  addCard(deckId: string , newCard: Card): StatusItem {
    try {
      const request: string | null = window.localStorage.getItem("decks");
      if (typeof request === "string") {
        const respons: Deck[] = JSON.parse(request);
        const newDecks: Deck[] = createCard(respons, deckId, newCard);
        window.localStorage.setItem("decks", JSON.stringify(newDecks));
      } else {
        throw new Error("Error not found data");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
    if (window.localStorage.getItem("decks") !== null) {
      return { name: "success", message: "Successfully card added" };
    } else {
      throw new Error("Error! Card didn`t add");
    }
  }

  addDeck(newDeck: Deck): StatusItem {
    try {
      const request: string | null = window.localStorage.getItem("decks");
      if (typeof request === "string") {
        const respons: Deck[] = JSON.parse(request);
        const updatedDecks: Deck[] = [...respons, newDeck];
        window.localStorage.setItem("decks", JSON.stringify(updatedDecks));
      } else {
        throw new Error("Error not found data");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }

    if (window.localStorage.getItem("decks") !== null) {
      return { name: "success", message: "Successfully deck added" };
    } else {
      throw new Error("Error! Deck didn`t add");
    }
  }

  deleteDeck(deckId: string): StatusItem {
    try {
      const request: string | null = window.localStorage.getItem("decks");
      if (typeof request === "string") {
        const respons: Deck[] = JSON.parse(request);
        const newDecks: Deck[] = removeDeck(respons, deckId);
        window.localStorage.setItem("decks", JSON.stringify(newDecks));
      } else {
        throw new Error("Error not found data");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }

    if (window.localStorage.getItem("decks") !== null) {
      return { name: "success", message: "Successfully deck deleted" };
    } else {
      throw new Error("Error! Deck  didn`t delete");
    }
  }

  deleteCard(deckId : string,  cardId: string): StatusItem {
    try {
      const request: string | null = localStorage.getItem("decks");
      if (typeof request === "string") {
        const respons: Deck[] = JSON.parse(request);
        const newDecks: Deck[] = removeCard(respons, deckId, cardId);
        window.localStorage.setItem("decks", JSON.stringify(newDecks));
      } else {
        throw new Error("Error not found data");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }

    if (window.localStorage.getItem("decks") !== null) {
      return { name: "success", message: "Successfully card deleted" };
    } else {
      throw new Error("Error! Card didn`t delete");
    }
  }

  getDecks(): Deck[] | StatusItem | undefined {
    try {
      const request: string | null = localStorage.getItem("decks");
      if (typeof request === "string") {
        const respons: Deck[] = JSON.parse(request);
        return respons;
      } else {
        throw new Error("Error not found data");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }
}
