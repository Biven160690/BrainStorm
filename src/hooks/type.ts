import { Params } from "react-router";

import { CardItem, DeckItem } from "../components/forms/type";
import { Card } from "./interface";

type NewItems = CardItem | DeckItem | undefined;

type UpdateDataProp = string & CardItem & DeckItem

export type GetSelectedCardsDeck = (id: string | undefined) => Card[] | [];

export type UpdateDecks = (urlParams: Params, newItems?: NewItems, ) => void;

export type UpdateData = (action: string, ...rest: UpdateDataProp[]) => void;
