import { CardItems, DeckItems } from "../components/forms/interface";
import { Decks } from "../hooks/interface";
import {
  creatingCard,
  creatingDeck,
  removingCard,
  removingDeck,
} from "./helperFunctions";

export class DataManagment {
  addCard(
    deckId: string,
    newItems: CardItems,
    setStatus: (arg: string) => void
  ): void {
    try {
      const request: string | null = window.localStorage.getItem("decks");
      if (typeof request === "string") {
        const respons: Decks[] = JSON.parse(request);
        const newDecks: Decks[] = creatingCard(respons, deckId, newItems);
        window.localStorage.setItem("decks", JSON.stringify(newDecks));
      } else {
        setStatus("Error not found data");
      }
      const status: string =
        window.localStorage.getItem("decks") !== null
          ? "Successfully card added"
          : "Error card added";
      setStatus(status);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setStatus(error.message);
      }
    }
  }

  addDeck(data: DeckItems, setStatus: (arg: string) => void): void {
    try {
      const request: string | null = window.localStorage.getItem("decks");
      if (typeof request === "string") {
        const respons: Decks[] = JSON.parse(request);
        const newDecks: Decks = creatingDeck(data);
        const updatedDecks: Decks[] = [...respons, newDecks];
        window.localStorage.setItem("decks", JSON.stringify(updatedDecks));
      } else {
        setStatus("Error not found data");
      }
      const status: string =
        window.localStorage.getItem("decks") !== null
          ? "Successfully deck added"
          : "Error! Deck didn`t add";
      setStatus(status);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setStatus(error.message);
      }
    }
  }

  deleteDeck(deckId: string, setStatus: (arg: string) => void): void {
    try {
      const request: string | null = window.localStorage.getItem("decks");
      if (typeof request === "string") {
        const respons: Decks[] = JSON.parse(request);
        const newDecks: Decks[] = removingDeck(respons, deckId);
        window.localStorage.setItem("decks", JSON.stringify(newDecks));
      } else {
        setStatus("Error not found data");
      }
      const status: string =
        window.localStorage.getItem("decks") !== null
          ? "Successfully deck deleted"
          : "Error! Deck  didn`t delete";
      setStatus(status);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setStatus(error.message);
      }
    }
  }

  deleteCard(
    deckId: string,
    cardId: string,
    setStatus: (arg: string) => void
  ): void {
    try {
      const request: string | null = localStorage.getItem("decks");
      if (typeof request === "string") {
        const respons: Decks[] = JSON.parse(request);
        const newDecks: Decks[] = removingCard(respons, deckId, cardId);
        window.localStorage.setItem("decks", JSON.stringify(newDecks));
      } else {
        setStatus("Error not found data");
      }
      const status: string =
        window.localStorage.getItem("decks") !== null
          ? "Successfully card deleted"
          : "Error! Card didn`t delete";
      setStatus(status);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setStatus(error.message);
      }
    }
  }

  getDecks() {
    const request = window.localStorage.getItem("decks");
    if (typeof request === "string") {
      const respons = JSON.parse(request);
      return respons;
    }
  }
}
