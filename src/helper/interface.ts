export interface FormPropsItems {
  header: string;
  forms?: string[];
  isWarningForm?: boolean;
  buttons: string[];
}

export interface FormProps {
  [x: string]: FormPropsItems;
}

export interface ButtonsColorItems {
  [key: string]: string;
}

export interface ButtonsTypeItems extends ButtonsColorItems {}

export interface CreateButtonsProps {
  button: string;
  buttonFunctions: { [key: string]: () => void };
}

export interface ButtonPropsItems {
  type: string;
  color: string;
  onClick?: () => void;
}

export interface InputPropsItems {
  label: string;
  error: boolean;
  variant: any;
  helperText: string;
}
