import React from "react";
import { Routes, Route, useParams } from "react-router-dom";

import { FlashCard } from "../flashCard/FlashCard";
import { GridsWrapper } from "../wrapper/GridsWrapper";
import { ModalsControl } from "../modal";

import { useStyles } from "../../theme/style";

import { Card } from "../../hooks/interface";
import { GetSelectedCardsDeck, UpdateDecks } from "../../hooks/type";

type FlashCardsCollectionProps = {
  getSelectedCardsDeck: GetSelectedCardsDeck;
  updateDecks: UpdateDecks;
};

type Params = { deckId: string };

export function FlashCardsCollection({
  getSelectedCardsDeck,
  updateDecks,
}: FlashCardsCollectionProps) {
  const { deckId } = useParams<Params>();

  const { emptyCardsDeck } = useStyles();

  const cardsDeck: Card[] | [] = getSelectedCardsDeck(deckId);

  return (
    <React.Fragment>
      {cardsDeck.length === 0 ? (
        <h2 className={emptyCardsDeck}>
          The deck is empty and you need to add cards
        </h2>
      ) : (
        <GridsWrapper>
          {cardsDeck.map((card) => {
            return <FlashCard key={card.id} {...card} />;
          })}
        </GridsWrapper>
      )}
      <Routes>
        <Route
          path=":action/:cardId"
          element={<ModalsControl updateDecks={updateDecks} />}
        />
        <Route
          path=":action"
          element={<ModalsControl updateDecks={updateDecks} />}
        />
      </Routes>
    </React.Fragment>
  );
}
