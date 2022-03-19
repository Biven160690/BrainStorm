import { useCallback, useEffect, useMemo, useState } from 'react';

import { DataManagement } from '../helper/interlayer';
import { AddCardProps, DataDeck } from './interface';

interface DataToUpdateDB {
  addDeck?: DataDeck;
  deleteDeck?: string;
  addCard?: AddCardProps;
}

interface Status {
  name: string;
  message: string;
}

interface UpdateDecksDB {
  setDataToUpdateDB: React.Dispatch<React.SetStateAction<DataToUpdateDB>>;
  status: Status;
  isOpen: boolean;
  setIsOpen: React.Dispatch<boolean>;
}

export function useUpdateDecksDB(): UpdateDecksDB {
  const [status, setStatus] = useState<Status>({
    name: 'Warning',
    message: ' Oops, something went wrong! Please repeat again',
  });

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [dataToUpdateDB, setDataToUpdateDB] = useState<DataToUpdateDB>({});

  const dataManagement = useMemo(() => new DataManagement(), []);

  const addDeck = useCallback(
    async (newDeck: DataDeck) => {
      try {
        await dataManagement.addDeck(newDeck);
      } catch (error) {
        if (error instanceof Error) {
          setStatus(error);
          setIsOpen(true);
        }
      }
    },
    [dataManagement]
  );

  const addCard = useCallback(
    async (card: AddCardProps) => {
      try {
        await dataManagement.addCard(card);
      } catch (error) {
        if (error instanceof Error) {
          setStatus(error);
          setIsOpen(true);
        }
      }
    },
    [dataManagement]
  );

  const deleteDeck = useCallback(
    async (deckId: string) => {
      try {
        await dataManagement.deleteDeck(deckId);
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
    dataToUpdateDB.addCard && addCard(dataToUpdateDB.addCard);
  }, [addCard, dataToUpdateDB.addCard]);

  useEffect(() => {
    dataToUpdateDB.deleteDeck && deleteDeck(dataToUpdateDB.deleteDeck);
  }, [deleteDeck, dataToUpdateDB.deleteDeck]);

  return {
    setDataToUpdateDB,
    status,
    isOpen,
    setIsOpen,
  };
}
