import { Routes, Route } from "react-router-dom";

import FlashCardsCollection from "../components/pages/FlashCardsCollection";
import FlashCardsDeckCollection from "../components/pages/FlashCardsDeckCollection";
import Layout from "../components/layouts/Layout";
import NotFound from "../components/pages/NotFound";
import useDecksState from "../hooks/useDecksState";

function RootRouter() {
  const {
    decks,
    getSelectedCardsDeck,
    updatingDecks
  } = useDecksState()

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/*' element={<FlashCardsDeckCollection decks={decks} updatingDecks={updatingDecks} />} />
        <Route path='/decks/*' element={<FlashCardsDeckCollection decks={decks} updatingDecks={updatingDecks} />} />
        <Route path='/deck/:deckId/*' element={<FlashCardsCollection getSelectedCardsDeck={getSelectedCardsDeck} updatingDecks={updatingDecks} />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RootRouter;
