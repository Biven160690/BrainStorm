export interface AddFormProps {
  header: string;
  labels: string[];
  openInputs: boolean;
  buttons: string[];
}
export interface DeleteFormProps {
  header: string;
  openInputs: boolean;
  buttons: string[];
}
export interface FormProps {
  [key: string]: AddFormProps | DeleteFormProps;
}

export interface InputProps {
  label: string;
  error: boolean;
  variant: any;
  helperText: string;
}
