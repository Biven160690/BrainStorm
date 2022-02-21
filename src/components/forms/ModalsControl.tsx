import { useLocation, useParams, useNavigate, NavigateFunction, Params } from 'react-router-dom';
import Modal from './Modal';

import { FormItems, ModalsControlProps, OnSubmitProps } from './type';
import { LocationState } from './interface'
import { formProps } from '../../helper/helpersObjects';


function ModalsControl({ updatingDecks }: ModalsControlProps) {
  const params = useParams<Params>()

  const navigate: NavigateFunction = useNavigate()

  const location = useLocation()

  const goBack: () => void = () => navigate(-1)

  const onSubmit: OnSubmitProps = (data) => {
    goBack()
    updatingDecks(data, params)
  };

  const action = params.action as string

  const open = location.state as LocationState
  
  const formItems: FormItems = formProps[action]

  return (
    <>
      <Modal formItems={formItems} handleClickGoBack={goBack} openModal={open} onSubmit={onSubmit} />
    </>
  );
}

export default ModalsControl

