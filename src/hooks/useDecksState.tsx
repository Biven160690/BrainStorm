import { useEffect, useState } from "react";

import { useUpdateState } from "../../../copy/src/hooks/useUpdateState";

import { AlertProps, Deck } from "../../../copy/src/hooks/interface";
import { GetSelectedCardsDeck, UpdateDecks } from "../../../copy/src/hooks/type";
import { DataManagement } from "../../../copy/src/helper/interlayer";
import { StatusItem } from "../../../copy/src/helper/interface";

type DecksState = {
  decks: Deck[];
  getSelectedCardsDeck: GetSelectedCardsDeck;
  updateDecks: UpdateDecks;
  isLoading: boolean;
  alertProps: AlertProps,
  hasError: StatusItem | undefined
};

export function useDecksState(): DecksState {
  const [decks, setDecks] = useState<Deck[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const [hasError, setHasError] = useState<StatusItem | undefined>()

  const dataManagement: DataManagement = new DataManagement();

  useEffect(() => {
    const getDecks = () => {
      setIsLoading(true);
      try {
        const decks = dataManagement.getDecks()
        
        if(decks instanceof Array) {
          setDecks(decks);
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          setHasError(error)
        }
      }
      setIsLoading(false); 
    };

    getDecks();
  }, []);

  const { updateDecks, alertProps } = useUpdateState(decks, setDecks);

  const getSelectedCardsDeck: GetSelectedCardsDeck = (id) => {
    if (typeof id === "string" && decks.length) {
      const elementsIndex: number = decks.findIndex((deck) => deck.id === +id);
      return decks[elementsIndex].cards;
    }
    return [];
  };

  return {
    decks,
    getSelectedCardsDeck,
    updateDecks,
    isLoading,
    alertProps,
    hasError
  };
}
