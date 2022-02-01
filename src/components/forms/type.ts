import { CardItems, DeckItems, LocationState } from "./interface";
import { AddFormProps, DeleteFormProps } from "../../helper/interface";
import { UpdatingDecks } from "../../hooks/type";

export type OnSubmitProps = (data: DeckItems | CardItems) => void;

export type FormItems = DeleteFormProps &
  Omit<AddFormProps, "labels"> & {
    labels?: string[];
  };

export type ModalsControlProps = {
  updatingDecks: UpdatingDecks;
};

export type ModalProps = {
  formItems: FormItems;
  handleClickGoBack: () => void;
  openModal: LocationState;
  onSubmit: OnSubmitProps;
};
