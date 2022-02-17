import React from "react";
import { Route, Routes } from "react-router-dom";

import { FlashCardsDeck } from "../flashCardsDeck/FlashCardsDeck";
import { GridsWrapper } from "../wrapper/GridsWrapper";
import { ModalsControl } from "../modal";
import { Loading } from "../loading/Loading";

import { UpdateDecks } from "../../hooks/type";
import { Deck } from "../../hooks/interface";

type FlashCardsDeckCollectionProps = {
  decks: Deck[];
  updateDecks: UpdateDecks;
  isLoading: boolean;
};

export function FlashCardsDeckCollection({
  decks,
  updateDecks,
  isLoading,
}: FlashCardsDeckCollectionProps) {
  return (
    <React.Fragment>
      {isLoading ? (
        <Loading />
      ) : (
        <GridsWrapper>
          {decks.map((deck) => {
            return <FlashCardsDeck key={deck.id} {...deck} />;
          })}
        </GridsWrapper>
      )}
      <Routes>
        <Route
          path=":action/:item/:deckId"
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
