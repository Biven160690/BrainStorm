import { useLocation, useNavigate, NavigateFunction } from "react-router-dom";

import { Modal } from "./Modal";
import { useTrigerForms } from "../../hooks/useTrigerForms";

import { UpdateDecks } from "../../hooks/type";

interface LocationState {
  open: boolean;
  selectedItem: string;
}

type ModalsControlProps = {
  updateDecks: UpdateDecks;
};

export function ModalsControl({ updateDecks }: ModalsControlProps) {
  const navigate: NavigateFunction = useNavigate();

  const location = useLocation();

  const goBack: () => void = () => {
    navigate(-1);
  };

  const { open, selectedItem } = location.state as LocationState;

  const { form, modalHeader } = useTrigerForms(
    goBack,
    updateDecks,
    selectedItem
  );

  return (
    <Modal header={modalHeader} handleClickGoBack={goBack} isOpenModal={open}>
      {form}
    </Modal>
  );
}
