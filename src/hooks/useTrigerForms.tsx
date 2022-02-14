import { AddCardForm, AddDeckForm } from "../components/forms/addFoms";
import { DeleteCardForm, DeleteDeckForm } from "../components/forms/deleteForms";
  
import { OnSubmitProps } from "../components/forms/type";

type TrigerFormsProps = (action: string, goBack: () => void, onSubmit: OnSubmitProps, selectedItem: string) => {
  form: React.ReactNode, modalHeader: string
}

interface formsItems {
  [key: string] : { form: React.ReactNode, modalHeader: string }
}

export const useTrigerForms: TrigerFormsProps = (action, goBack, onSubmit, selectedItem) => {
  const formProps = {
    handleClickGoBack: goBack,
    onSubmit,
  };

  const forms: formsItems = {
    'add-card': {
      form: <AddCardForm {...formProps} />,
      modalHeader: `You are creating new card in deck: '${selectedItem}'.`,
    },
    'add-deck': {
      form: <AddDeckForm {...formProps} />,
      modalHeader: "You are creating new deck.",
    },
    'delete-deck': {
      form: <DeleteDeckForm {...formProps} />,
      modalHeader: `Are you sure you want to delete this Deck: '${selectedItem}'?`,
    },
    'delete-card': {
      form: <DeleteCardForm {...formProps} />,
      modalHeader: `Are you sure you want to delete this Card: '${selectedItem}'?`,
    }
  }

  return forms[action]
}
