import { createCollection, db } from '../firebase';
import {
  collection,
  doc,
  getDocs,
  setDoc,
  deleteDoc,
  query,
  where,
  onSnapshot,
} from 'firebase/firestore';

import { AddCardProps, DataDeck, DataCard, Status } from '../hooks/interface';
import { Repetition } from './interface';

export class DataManagement {
  async addCard({ newCard, deckId }: AddCardProps): Promise<Status> {
    const path = `cardsDecks/${deckId}/cards/${newCard.id}`;
    await setDoc(doc(db, path), {
      ...newCard,
    });

    return this.hasSuccessUserActions(path, 'add');
  }

  async addDeck(newDeck: DataDeck): Promise<Status> {
    const path = `cardsDecks/${newDeck.id}`;
    await setDoc(doc(db, path), { ...newDeck });

    return this.hasSuccessUserActions(path, 'add');
  }

  async deleteDeck(deckId: string): Promise<Status> {
    const path = `cardsDecks/${deckId}`;
    await this.deleteNestedCollections(deckId);
    await deleteDoc(doc(db, `cardsDecks/${deckId}`));

    return this.hasSuccessUserActions(path, 'delete');
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

  async deleteCard(deckId: string, cardId: string): Promise<Status> {
    const path = `cardsDecks/${deckId}/cards/${cardId}`;
    await deleteDoc(doc(db, path));

    return this.hasSuccessUserActions(path, 'delete');
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
  hasSuccessUserActions(path: string, action: string): Promise<Status> {
    return new Promise<Status>((resolve, reject) => {
      onSnapshot(
        doc(db, path),
        (querySnapshot) => {
          (
            action === 'delete'
              ? !querySnapshot.exists()
              : querySnapshot.exists()
          )
            ? resolve({
                name: 'Success',
                message: 'Successfully! Data was modifiedd',
              })
            : reject(new Error('Error! Data was not modifedd'));
        },
        (error) => reject(error)
      );
    });
  }
}
