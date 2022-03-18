import { createCollection, db } from '../firebase';
import {
  collection,
  doc,
  getDocs,
  setDoc,
  deleteDoc,
  query,
  where,
} from 'firebase/firestore';

import { AddCardProps, DataDeck, DataCard } from '../hooks/interface';
import { Repetition } from './interface';

export class DataManagement {
  async addCard({ newCard, deckId }: AddCardProps): Promise<void> {
    await setDoc(doc(db, `cardsDecks/${deckId}/cards/${newCard.id}`), {
      ...newCard,
    });
  }

  async addDeck(newDeck: DataDeck): Promise<void> {
    await setDoc(doc(db, `cardsDecks/${newDeck.id}`), { ...newDeck });
  }

  async deleteDeck(deckId: string): Promise<void> {
    await Promise.all([
      this.deleteNestedCollections(deckId),
      deleteDoc(doc(db, `cardsDecks/${deckId}`)),
    ]);
  }

  async deleteNestedCollections(deckId: string): Promise<void> {
    const cardsDeck = await getDocs(
      collection(db, `cardsDecks/${deckId}/cards`)
    );
    if (!cardsDeck.empty) {
      cardsDeck.forEach((docs) => {
        deleteDoc(doc(db, `cardsDecks/${deckId}/cards/${docs.id}`));
      });
    }
  }

  async deleteCard(deckId: string, cardId: string): Promise<void> {
    await deleteDoc(doc(db, `cardsDecks/${deckId}/cards/${cardId}`));
  }

  async getDecks(): Promise<DataDeck[]> {
    const cardsDecksCollection = createCollection<DataDeck>('cardsDecks');

    const docDecks = await getDocs(cardsDecksCollection);
    return docDecks.empty ? [] : docDecks.docs.map((card) => card.data());
  }

  async getCards(deckId: string): Promise<DataCard[]> {
    const cardsCollection = createCollection<DataCard>(
      `cardsDecks/${deckId}/cards`
    );

    const selectedCards = query(
      cardsCollection,
      where('repetitionConditions.msToNextReview', '<=', Date.now())
    );
    const docCards = await getDocs(selectedCards);
    return docCards.empty ? [] : docCards.docs.map((card) => card.data());
  }

  async updateRepetitionsData(
    idDeck: number,
    idCard: number,
    nextReviewDueDate: Repetition
  ): Promise<void> {
    await setDoc(
      doc(db, `cardsDecks/${idDeck}/cards/${idCard}`),
      { repetitionConditions: nextReviewDueDate },
      { merge: true }
    );
  }
}
