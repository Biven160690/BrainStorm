import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

import FormsInput from './FormsInput';
import FormsButton from './FormsButton'

import { DataManagementFormProps } from './type'
import { IFormInput } from './interface'
import { useStyles } from '../../theme/style'

function DataManagementForm({ open, handleClickCloseModal, onSubmit, buttonFunctions, formItems }: DataManagementFormProps) {
  const { formTitle, formInputs } = useStyles()

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInput>();

  return (
    <Box >
      <Dialog
        open={open}
        onClose={handleClickCloseModal}
      >
        <DialogTitle className={formTitle}>
          {formItems.header}
        </DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          {!formItems?.isWarningForm &&
            <Box className={formInputs}>
              {formItems.forms?.map((form: string) => {
                return (
                  <FormsInput key={form} control={control} errors={errors} form={form} />
                )
              })}
            </Box>
          }
          <DialogActions>
            {formItems.buttons.map((button: string) => {
              return (
                <FormsButton key={button} button={button} buttonFunctions={buttonFunctions} />
              )
            })}
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
}

export default DataManagementForm
