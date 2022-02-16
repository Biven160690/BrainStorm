import { Params, useParams } from "react-router";

import { AddCardForm, AddDeckForm } from "../components/forms/addFoms";
import {
  DeleteCardForm,
  DeleteDeckForm,
} from "../components/forms/deleteForms";
import { Error } from '../components/errors/Error'

import { CardItem, DeckItem } from "../components/forms/type";
import { UpdateDecks } from "./type";

type Form = {
  form: React.ReactNode;
  modalHeader: string;
} 

type TrigerForms = (
  goBack: () => void,
  updateDecks: UpdateDecks,
  selectedItem: string
) => Form

export const useTrigerForms: TrigerForms = (
  goBack,
  updateDecks,
  selectedItem
) => {

  const params = useParams<Params>();

  const action = params.action as string;

  const addData = (data: DeckItem | CardItem) => {
    goBack();
    updateDecks(params, data);
  };

  const deleteData = () => {
    goBack();
    updateDecks(params);
  };

  const addFormProps = {
    handleClickGoBack: goBack,
    onSubmit: addData,
  };

  const deleteFormProps = {
    handleClickGoBack: goBack,
    onSubmit: deleteData,
  };

  switch (action) {
    case "add-card":
      return {
        form: <AddCardForm {...addFormProps} />,
        modalHeader: `You are creating new card in deck: '${selectedItem}'.`,
      };
    case "add-deck":
      return {
        form: <AddDeckForm {...addFormProps} />,
        modalHeader: "You are creating new deck.",
      };
    case "delete-deck":
      return {
        form: <DeleteDeckForm {...deleteFormProps} />,
        modalHeader: `Are you sure you want to delete this Deck: '${selectedItem}'?`,
      };
    case "delete-card":
      return {
        form: <DeleteCardForm {...deleteFormProps} />,
        modalHeader: `Are you sure you want to delete this Card: '${selectedItem}'?`,
      };
    default:
      return {
        form: <Error/>,
        modalHeader: 'Error'
      };
  }
};
