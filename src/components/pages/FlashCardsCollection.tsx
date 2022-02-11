import { Routes, Route, useParams } from "react-router-dom";
import FlashCard from '../flashCard/FlashCard';
import GridsWrapper from '../wrappers/GridsWrapper';
import ModalsControl from '../forms/ModalsControl';

import { FlashCardsCollectionProps, Params } from "./types";
import { Card } from "../../hooks/interface";

function FlashCardsCollection({ getSelectedCardsDeck, updatingDecks }: FlashCardsCollectionProps) {
  const { deckId } = useParams<Params>()

  const cardsDeck: Card[] | undefined = getSelectedCardsDeck(deckId)

  return (
    <>
      <GridsWrapper>
        {cardsDeck?.map((card) => {
          return (
            <FlashCard key={card.id} {...card} />
          )
        })}
      </GridsWrapper>
      <Routes>
        <Route
          path=':action/:cardId'
          element={<ModalsControl updatingDecks={updatingDecks} />}
        />
        <Route
          path=':action'
          element={<ModalsControl updatingDecks={updatingDecks} />}
        />
      </Routes>
    </>
  )
}

export default FlashCardsCollection
