import { useLocation, useParams } from 'react-router-dom';

import { Modal } from '../components/modal/Modal';
import { ModalsTitle } from '../components/modal/ModalsTitle';
import { ModalsActions } from '../components/modal/ModalsActions';

import { useTriggerCardsForm } from '../hooks';

import { ModalCardsProps } from '../components/modal/interface';
import { headerInitialization } from '../helper/headerInitialization';

interface LocationState {
  open: boolean;
  title: string;
}

export const ModalCardsControl = (callbacks: ModalCardsProps) => {
  const location = useLocation();

  const params = useParams();

  const action = params.action as string;

  const { open, title } = location.state as LocationState;

  const form: JSX.Element = useTriggerCardsForm(callbacks);

  const modalHeader: string = headerInitialization(action, title);

  return (
    <Modal isOpenModal={open}>
      <ModalsTitle header={modalHeader} />
      <ModalsActions form={form} />
    </Modal>
  );
};
