import {
  useLocation,
  useParams,
  useNavigate,
  NavigateFunction,
  Params,
} from "react-router-dom";

import { Modal } from "./Modal";
import { useTrigerForms } from "../../hooks/useTrigerForms";

import { OnSubmitProps } from "../forms/type";
import { UpdateDecks } from "../../hooks/type";

interface LocationState {
  open: boolean;
  selectedItem: string
}

type ModalsControlProps = {
  updateDecks: UpdateDecks;
};

export function ModalsControl({ updateDecks }: ModalsControlProps) {
  const params = useParams<Params>();

  const navigate: NavigateFunction = useNavigate();

  const location = useLocation();

  const goBack: () => void = () => {
    navigate(-1);
  };

  const onSubmit: OnSubmitProps = (data) => {
    goBack();
    updateDecks(data, params);
  };

  const action = params.action as string;

  const { open, selectedItem } = location.state as LocationState;
  
  const { form, modalHeader } = useTrigerForms(action, goBack, onSubmit, selectedItem);

  return (
    <Modal header={modalHeader} handleClickGoBack={goBack} isOpenModal={open}>
      {form}
    </Modal>
  );
}
