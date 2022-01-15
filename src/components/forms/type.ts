import { Control, FieldError } from 'react-hook-form';

import { OnSubmitProps, IFormInput }  from './interface'
import { ButtonFunctionsItems } from '../hoc/interface'
import { FormPropsItems } from '../../helper/interface';

export type DataManagementFormProps = {
  open: boolean;
  handleClickCloseModal: () => void;
  onSubmit: (data: OnSubmitProps) => void;
  formItems: FormPropsItems;
  buttonFunctions: ButtonFunctionsItems
};

export type FormsInputProps = {
  control: Control<IFormInput, object>;
  errors: { [x: string]: FieldError };
  form: string;
};

export type FormsButtonProps = {
    button: string;
    buttonFunctions: ButtonFunctionsItems
  };
  