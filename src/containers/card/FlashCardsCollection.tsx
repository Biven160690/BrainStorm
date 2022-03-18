import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CardContainer } from './CardContainer';
import { GridsWrapper } from '../../components/wrapper/GridsWrapper';
import { Loading } from '../../components/loading/Loading';
import { ErrorCardsDeck } from '../../components/errors/ErrorCardsDeck';

import { useUpdateCardsDB } from '../../hooks';
import { CardsRouter } from '../../routers';

import { triggerAlert } from '../../helper/triggerAlert';

import { DataManagement } from '../../helper/interlayer';

import { DataCard, DataDeck } from '../../hooks/interface';
import { NewDeck } from '../../components/forms/type';
import {
  createNewDeck,
  removeSelectedCard,
} from '../../helper/helperFunctions';

type Params = {
  deckId?: string;
};

export function FlashCardsCollection() {
  const { deckId } = useParams<Params>();

  const [cards, setCards] = useState<DataCard[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [hasError, setHasError] = useState<Error | undefined>();

  useEffect(() => {
    const dataManagement: DataManagement = new DataManagement();

    const getCards = async () => {
      setIsLoading(true);
      try {
        if (deckId) {
          const cards = await dataManagement.getCards(deckId);
          setCards(cards);
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          setHasError(error);
        }
      }
      setIsLoading(false);
    };

    getCards();
  }, [deckId]);

  const { getRepetitionData, setDataToUpdateDB, ...alertProps } =
    useUpdateCardsDB();

  function addDeck(data: NewDeck) {
    const newDeck: DataDeck = createNewDeck(data);
    setDataToUpdateDB({ addDeck: newDeck });
  }

  function deleteCard(deckId: string, cardId: string) {
    const updatedCards: DataCard[] = removeSelectedCard(cardId, cards);
    setCards(updatedCards);
    setDataToUpdateDB({
      deleteCard: {
        deckId,
        cardId,
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
    deleteCard,
  };

  return (
    <React.Fragment>
      {alertProps.isOpen && triggerAlert(alertProps)}
      <GridsWrapper>
        {cards.map((card) => {
          return (
            <CardContainer
              key={card.id}
              card={card}
              handleClickGetRating={getRepetitionData}
            />
          );
        })}
      </GridsWrapper>
      <CardsRouter {...callbacks} />
    </React.Fragment>
  );
}
