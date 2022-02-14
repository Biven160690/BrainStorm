export type CardItems = {
  "new word": string;
  translation: string;
};

export type DeckItems = {
  title: string;
  description: string;
};

export type OnSubmitProps = (data?: DeckItems | CardItems) => void;
