import { useForm, Controller } from "react-hook-form";
import { Box, Button, TextField } from "@mui/material";

import { useStyles } from "../../../theme/style";

import { createInputsProps } from "../../../helper/helperFunctions";

import { OnSubmitProps, CardItems } from "../type";

type AddCardFormProps = {
  handleClickGoBack: () => void;
  onSubmit: OnSubmitProps;
};

export function AddCardForm({ handleClickGoBack, onSubmit }: AddCardFormProps) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CardItems>();

  const { formInputs, formButtons } = useStyles();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box className={formInputs}>
        <Controller
          render={({ field }) => (
            <TextField 
            {...field} 
            {...createInputsProps(errors, "new word")} />
          )}
          control={control}
          rules={{ required: true, minLength: 1 }}
          name="new word"
          defaultValue=""
        />
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              {...createInputsProps(errors, "translation")}
            />
          )}
          control={control}
          rules={{ required: true, minLength: 1 }}
          name="translation"
          defaultValue=""
        />
      </Box>
      <Box className={formButtons}>
        <Button type="button" color="primary" onClick={handleClickGoBack}>
          Cancel
        </Button>
        <Button type="submit" color="success">
          Save
        </Button>
      </Box>
    </form>
  );
}
