import { useForm, Controller } from "react-hook-form";
import { Box, Button, TextField } from "@mui/material";

import { useStyles } from "../../../theme/style";

import { createInputsProps } from "../../../helper/helperFunctions";

import { CardItem } from "../type";

type AddCardFormProps = {
  handleClickGoBack: () => void;
  onSubmit: (data: CardItem) => void;
};

export function AddCardForm({ handleClickGoBack, onSubmit }: AddCardFormProps) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CardItem>();

  const { formInputs, formButtons } = useStyles();

  const getData = (data: CardItem) => onSubmit(data)

  return (
    <form onSubmit={handleSubmit(getData)}>
      <Box className={formInputs}>
        <Controller
          render={({ field }) => (
            <TextField 
              {...field} 
              {...createInputsProps(errors, "new word")} 
            />
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
