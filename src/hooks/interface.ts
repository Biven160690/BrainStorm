export interface Card {
  id: number;
  "new word": string;
  translation: string;
}

export interface Decks {
  id: number;
  title: string;
  description: string;
  cards: Card[];
}
