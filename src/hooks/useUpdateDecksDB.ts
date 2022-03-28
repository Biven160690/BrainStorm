import { useCallback, useEffect, useMemo, useState } from 'react';

import { DataManagement } from '../helper/dataManagement';
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
  status: Status | undefined;
  isOpen: boolean;
  setIsOpen: React.Dispatch<boolean>;
}

export function useUpdateDecksDB(): UpdateDecksDB {
  const [status, setStatus] = useState<Status>();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [dataToUpdateDB, setDataToUpdateDB] = useState<DataToUpdateDB>({});

  const dataManagement = useMemo(() => new DataManagement(), []);

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

  const addCard = useCallback(
    async (card: AddCardProps) => {
      try {
        const status = await dataManagement.addCard(card);
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

  const deleteDeck = useCallback(
    async (deckId: string) => {
      try {
        const status = await dataManagement.deleteDeck(deckId);
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
