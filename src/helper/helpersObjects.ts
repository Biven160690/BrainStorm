import {
  FormProps,
} from "./interface";

const formProps: FormProps = {
  addCard: {
    header: "You are creating new card.",
    labels: ["new word", "translation"],
    buttons: ["cancel", "save"],
    openInputs: true,
  },
  addDeck: {
    header: "You are creating new deck.",
    labels: ["title", "description"],
    buttons: ["cancel", "save"],
    openInputs: true,
  },
  deleteDeck: {
    header: "Are you sure you want to delete this Deck?",
    openInputs: false,
    buttons: ["cancel", "delete"],
  },
  deleteCard: {
    header: "Are you sure you want to delete this Card",
    openInputs: false,
    buttons: ["cancel", "delete"],
  },
};


export { formProps };
