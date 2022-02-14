import { useForm, Controller } from "react-hook-form";
import { Box, Button, TextField } from "@mui/material";

import { useStyles } from "../../../theme/style";

import { createInputsProps } from "../../../helper/helperFunctions";

import { OnSubmitProps, DeckItems} from "../type";

type AddDeckFormProps = {
  handleClickGoBack: () => void,
  onSubmit: OnSubmitProps
}

export function AddDeckForm({ handleClickGoBack, onSubmit, }: AddDeckFormProps) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<DeckItems>();

  const { formInputs, formButtons } = useStyles();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box className={formInputs}>
        <Controller
          render={({ field }) => (
            <TextField 
            {...field} 
            {...createInputsProps(errors, "title")} />
          )}
          control={control}
          rules={{ required: true, minLength: 1 }}
          name="title"
          defaultValue=""
        />
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              {...createInputsProps(errors, "description")}
            />
          )}
          control={control}
          rules={{ required: true, minLength: 1 }}
          name="description"
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
