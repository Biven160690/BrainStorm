import {
  FormProps,
  ButtonsColorItems,
  ButtonsTypeItems,
  CreateButtonsProps,
  InputPropsItems,
  ButtonPropsItems,
} from "./interface";
import { FieldError } from "react-hook-form";

const formProps: FormProps = {
  addCard: {
    header: "You are creating new card.",
    forms: ["New word", "Translation"],
    buttons: ["cancel", "save"],
  },
  addDeck: {
    header: "You are creating new deck.",
    forms: ["Title", "Description"],
    buttons: ["cancel", "save"],
  },
  deleteItems: {
    header: "Are you sure you want to delete this item?",
    isWarningForm: true,
    buttons: ["cancel", "delete"],
  },
};

const buttonsColor: ButtonsColorItems = {
  cancel: "primary",
  save: "success",
  delete: "error",
};

const buttonsType: ButtonsTypeItems = {
  cancel: "reset",
  save: "submit",
  delete: "submit",
};

function createButtonsProps(data: CreateButtonsProps): ButtonPropsItems {
  const { button, buttonFunctions } = data;

  const buttonProps: ButtonPropsItems = {
    type: buttonsType[button],
    color: buttonsColor[button],
  };

  if (buttonFunctions[button]) {
    buttonProps.onClick = buttonFunctions[button];
  }

  return buttonProps;
}

function createInputsProps(
  errors: { [x: string]: FieldError },
  form: string
): InputPropsItems {
  const isValidForm: FieldError = errors[form || ""];

  const inputProps: InputPropsItems = {
    label: form,
    error: !!isValidForm,
    variant: "outlined",
    helperText: isValidForm && "This field is required",
  };

  return inputProps;
}

export {
  formProps,
  buttonsColor,
  buttonsType,
  createButtonsProps,
  createInputsProps,
};
