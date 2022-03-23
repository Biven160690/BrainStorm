import { useCallback, useEffect, useState, MouseEvent, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { DataManagement } from '../helper/dataManagement';

import { RepetiCardsData } from '../helper/interface';
import { updateRepetitionData } from '../helper/updateRepetitionData';
import { DataDeck, Status } from './interface';

type Params = {
  deckId?: string;
};

interface DataToUpdateDB {
  addDeck?: DataDeck;
  deleteCard?: DeleteCardProps;
}

interface DeleteCardProps {
  deckId: string;
  cardId: string;
}

interface UpdateCardsDB {
  getRepetitionData: (
    repetiCardsData: RepetiCardsData,
    event: MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => void;
  setDataToUpdateDB: React.Dispatch<React.SetStateAction<DataToUpdateDB>>;
  status: Status | undefined;
  isOpen: boolean;
  setIsOpen: React.Dispatch<boolean>;
}

type GetRepetitionData = (
  repetiCardsData: RepetiCardsData,
  event: MouseEvent<HTMLButtonElement | HTMLDivElement>
) => void;

export function useUpdateCardsDB(): UpdateCardsDB {
  const [status, setStatus] = useState<Status>();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [dataToUpdateDB, setDataToUpdateDB] = useState<DataToUpdateDB>({});

  const dataManagement = useMemo(() => new DataManagement(), []);

  const { deckId } = useParams<Params>();

  const getRepetitionData: GetRepetitionData = useCallback(
    (repetiCardsData, event) => {
      deckId && updateRepetitionData(repetiCardsData, event, deckId);
    },
    [deckId]
  );

  const addDeck = useCallback(
    async (newDeck: DataDeck) => {
      try {
        const status = await dataManagement.addDeck(newDeck);
        setStatus(status);
        setIsOpen(true);
      } catch (error) {
        if (error instanceof Error) {
          setStatus(error);
          setIsOpen(true);
        }
      }
    },
    [dataManagement]
  );

  const deleteCard = useCallback(
    async (urlParams: DeleteCardProps) => {
      const { deckId, cardId } = urlParams;
      try {
        const status = await dataManagement.deleteCard(deckId, cardId);
        setStatus(status);
        setIsOpen(true);
      } catch (error) {
        if (error instanceof Error) {
          setStatus(error);
          setIsOpen(true);
        }
      }
    },
    [dataManagement]
  );

  useEffect(() => {
    dataToUpdateDB.addDeck && addDeck(dataToUpdateDB.addDeck);
  }, [addDeck, dataToUpdateDB.addDeck]);

  useEffect(() => {
    dataToUpdateDB.deleteCard && deleteCard(dataToUpdateDB.deleteCard);
  }, [deleteCard, dataToUpdateDB.deleteCard]);

  return {
    getRepetitionData,
    setDataToUpdateDB,
    status,
    isOpen,
    setIsOpen,
  };
}
