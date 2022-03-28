import React, { useEffect, useState } from 'react';

import { ErrorCardsDeck } from '../components/errors/ErrorCardsDeck';
import { Deck } from '../components/deck';
import { GridsWrapper } from '../components/wrapper/GridsWrapper';
import { Loading } from '../components/loading/Loading';

import { useUpdateDecksDB } from '../hooks';
import { DecksRouter } from '../routers';

import { DataManagement } from '../helper/dataManagement';

import {
  createNewCard,
  createNewDeck,
  removeSelectedDeck,
} from '../helper/helperFunctions';
import { triggerAlert } from '../helper/triggerAlert';
import { NewCard, NewDeck } from '../components/forms/type';
import { DataCard, DataDeck } from '../hooks/interface';

export function FlashCardsDeckCollection() {
  const [decks, setDecks] = useState<DataDeck[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [hasError, setHasError] = useState<Error | undefined>();

  useEffect(() => {
    const dataManagement: DataManagement = new DataManagement();

    const getDecks = async () => {
      setIsLoading(true);
      try {
        const cardsDeck = await dataManagement.getDecks();
        setDecks(cardsDeck);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setHasError(error);
        }
      }
      setIsLoading(false);
    };

    getDecks();
  }, []);

  const { setDataToUpdateDB, ...alertProps } = useUpdateDecksDB();

  function addDeck(data: NewDeck) {
    const newDeck: DataDeck = createNewDeck(data);
    setDecks([...decks, newDeck]);
    setDataToUpdateDB({ addDeck: newDeck });
  }

  function deleteDeck(deckId: string) {
    const updatedDecks: DataDeck[] = removeSelectedDeck(deckId, decks);
    setDecks(updatedDecks);
    setDataToUpdateDB({ deleteDeck: deckId });
  }

  function addCard(data: NewCard, deckId: string) {
    const newCard: DataCard = createNewCard(data);
    setDataToUpdateDB({
      addCard: {
        newCard,
        deckId,
      },
    });
  }

  if (isLoading) {
    return <Loading />;
  }

  if (hasError) {
    return <ErrorCardsDeck {...hasError} />;
  }

  const callbacks = {
    addDeck,
    deleteDeck,
    addCard,
  };

  return (
    <React.Fragment>
      {alertProps.isOpen && triggerAlert(alertProps)}
      <GridsWrapper>
        {decks.map((deck) => {
          return <Deck key={deck.id} {...deck} />;
        })}
      </GridsWrapper>
      <DecksRouter {...callbacks} />
    </React.Fragment>
  );
}
