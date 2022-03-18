import { Control, Controller, FieldError } from 'react-hook-form';
import { Box, TextField } from '@mui/material';

import { useStyles } from '../../../../theme/style';

import { createInputsProps } from '../../../../helper/helperFunctions';

import { NewCard } from '../../type';

interface FormsInputsProps {
  errors: { [x: string]: FieldError };
  control: Control<NewCard, object>;
}

export function FormsInputs({ errors, control }: FormsInputsProps) {
  const { formInputs } = useStyles();

  return (
    <Box className={formInputs}>
      <Controller
        render={({ field }) => (
          <TextField {...field} {...createInputsProps(errors, 'new word')} />
        )}
        control={control}
        rules={{ required: true, minLength: 1 }}
        name='new word'
        defaultValue=''
      />
      <Controller
        render={({ field }) => (
          <TextField {...field} {...createInputsProps(errors, 'translation')} />
        )}
        control={control}
        rules={{ required: true, minLength: 1 }}
        name='translation'
        defaultValue=''
      />
    </Box>
  );
}
