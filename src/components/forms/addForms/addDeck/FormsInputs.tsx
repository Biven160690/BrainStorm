import { Control, Controller, FieldError } from 'react-hook-form';
import { Box, TextField } from '@mui/material';

import { useStyles } from '../../../../theme/style';

import { createInputsProps } from '../../../../helper/helperFunctions';

import { NewDeck } from '../../type';

interface FormsInputsProps {
  errors: { [x: string]: FieldError };
  control: Control<NewDeck, object>;
}

export function FormsInputs({ errors, control }: FormsInputsProps) {
  const { formInputs } = useStyles();

  return (
    <Box className={formInputs}>
      <Controller
        render={({ field }) => (
          <TextField {...field} {...createInputsProps(errors, 'title')} />
        )}
        control={control}
        rules={{ required: true, minLength: 1 }}
        name='title'
        defaultValue=''
      />
      <Controller
        render={({ field }) => (
          <TextField {...field} {...createInputsProps(errors, 'description')} />
        )}
        control={control}
        rules={{ required: true, minLength: 1 }}
        name='description'
        defaultValue=''
      />
    </Box>
  );
}
