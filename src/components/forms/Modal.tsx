import { useForm, Controller } from "react-hook-form";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

import { useStyles } from "../../theme/style";

import { ModalProps } from "./type";
import { FormInput } from "./interface";
import { createInputsProps } from "../../helper/helperFunctions";


function Modal({ formItems, handleClickGoBack, openModal, onSubmit }: ModalProps) {
  const { header, openInputs, labels = '', buttons } = formItems

  const { formTitle, formInputs } = useStyles();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormInput>();

  const { open } = openModal;

  const colorsButton = openInputs ? "success" : "error"

  return (
    <Box>
      <Dialog open={open} onClose={handleClickGoBack}>
        <DialogTitle className={formTitle}>{header}</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          {openInputs && (
            <Box className={formInputs}>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    {...createInputsProps(errors, labels[0])}
                  />
                )}
                control={control}
                rules={{ required: true, minLength: 1 }}
                name={labels[0]}
                defaultValue=""
              />
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    {...createInputsProps(errors, labels[1])}
                  />
                )}
                control={control}
                rules={{ required: true, minLength: 1 }}
                name={labels[1]}
                defaultValue=""
              />
            </Box>
          )}
          <DialogActions>
            <Button type="button" color="primary" onClick={handleClickGoBack}>
              {buttons[0]}
            </Button>
            <Button type="submit" color={colorsButton}>
              {buttons[1]}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
}

export default Modal;
