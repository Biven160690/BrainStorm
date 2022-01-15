import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

import { FormsInputProps } from './type'
import { createInputsProps } from '../../helper/helper'

function FormsInput({ control, errors, form }: FormsInputProps) {
  const inputProps = createInputsProps(errors, form)

  return (
    <>
      <Controller
        render={({ field }) => <TextField {...field}  {...inputProps} />}
        control={control}
        rules={{ required: true, minLength: 1 }}
        name={form || ' '} />
    </>
  )
}

export default FormsInput
