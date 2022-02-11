export interface CardItems {
  "new word": string;
  translation: string;
}
export interface DeckItems {
  title: string;
  description: string;
}
export interface LocationState {
  open: boolean;
}

export interface FormInput extends CardItems, DeckItems {
  [key: string]: string
}
