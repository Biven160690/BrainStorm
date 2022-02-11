import { useState } from 'react';
import useUpdatingState from './useUpdatingState';

import { DataManagment } from '../helper/interlayer';
import { Decks } from './interface'
import { GetSelectedCardsDeck, DecksState } from './type'

function useDecksState(): DecksState {
    const [decks, setDecks] = useState<Decks[]>(() => {
        const request = new DataManagment();
        const response = request.getDecks();
        return response
    });

    const [status, setStatus] = useState<string | undefined>()

    const updatingDecks = useUpdatingState(decks, setDecks, setStatus)

    const getSelectedCardsDeck: GetSelectedCardsDeck = (id) => {
        if (typeof id === 'string') {
            const elementsIndex: number = decks.findIndex((deck) => deck.id === +id)
            return decks[elementsIndex].cards
        }
    }
    
    return {
        decks,
        getSelectedCardsDeck,
        updatingDecks,
    };

}

export default useDecksState;
