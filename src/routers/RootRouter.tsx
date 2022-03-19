import { Routes, Route } from 'react-router-dom';

import { Cards, Decks, NotFound } from '../components/pages';
import { Layout } from '../components/layout/Layout';

export function RootRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/*' element={<Decks />} />
        <Route path='/decks/*' element={<Decks />} />
        <Route path='/deck/:deckId/*' element={<Cards />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
