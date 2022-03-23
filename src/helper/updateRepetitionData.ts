import { MouseEvent } from 'react';

import { updateRepetitionConditions } from './updateRepetitionConditions';
import { DataManagement } from './dataManagement';
import { RepetiCardsData } from './interface';

type UpdateRepetitionData = (
  repetiCardsData: RepetiCardsData,
  event: MouseEvent<HTMLButtonElement | HTMLDivElement>,
  idDeck: string
) => void;

export const updateRepetitionData: UpdateRepetitionData = (
  repetiCardsData,
  event,
  idDeck
) => {
  const { id, repetitionConditions } = repetiCardsData;
  const { rating } = (event.target as HTMLButtonElement).dataset;

  if (rating) {
    const nextReviewDueDate = updateRepetitionConditions(
      repetitionConditions,
      +rating
    );
    new DataManagement().updateRepetitionsData(+idDeck, +id, nextReviewDueDate);
  }
};
