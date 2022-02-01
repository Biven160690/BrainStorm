import { Route, Routes } from 'react-router-dom';
import FlashCardsDeck from '../flashCardsDeck/FlashCardsDeck';
import GridsWrapper from '../wrappers/GridsWrapper';
import ModalsControl from '../forms/ModalsControl';

import { FlashCardsDeckCollectionProps } from './types';

function FlashCardsDeckCollection({ decks, updatingDecks }: FlashCardsDeckCollectionProps) {

  return (
    <>
      <GridsWrapper>
        {decks?.map((deck) => {
          return (
            <FlashCardsDeck key={deck.id} {...deck} />
          );
        })}
      </GridsWrapper>
      <Routes>
        <Route
          path=':action/:item/:deckId'
          element={<ModalsControl updatingDecks={updatingDecks} />} />
        <Route
          path=':action'
          element={<ModalsControl updatingDecks={updatingDecks} />} />
      </Routes>
    </>
  )
}

export default FlashCardsDeckCollection
