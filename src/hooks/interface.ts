import { Dispatch, SetStateAction } from "react";

import { StatusItem } from "../helper/interface";

export interface Card {
  id: number;
  "new word": string;
  translation: string;
}

export interface Deck {
  id: number;
  title: string;
  description: string;
  cards: Card[];
}

export interface AlertProps {
  status: StatusItem | undefined;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
