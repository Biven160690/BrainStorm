import { Routes, Route } from "react-router-dom";

import {
  FlashCardsCollection,
  FlashCardsDeckCollection,
  NotFound,
} from "../../../copy/src/components/pages";
import { Layout } from "../../../copy/src/components/layout/Layout";

import { useDecksState } from "../../../copy/src/hooks/useDecksState";

export function RootRouter() {
  const {
    decks,
    getSelectedCardsDeck,
    updateDecks,
    isLoading,
    alertProps,
    hasError
  } = useDecksState();
  
  return (
    <Routes>
      <Route element={<Layout alertProps={alertProps} hasError={hasError}/>}>
        <Route
          path="/*"
          element={
            <FlashCardsDeckCollection
              decks={decks}
              updateDecks={updateDecks}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path="/decks/*"
          element={
            <FlashCardsDeckCollection
              decks={decks}
              updateDecks={updateDecks}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path="/deck/:deckId/*"
          element={
            <FlashCardsCollection
              getSelectedCardsDeck={getSelectedCardsDeck}
              updateDecks={updateDecks}
            />
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
