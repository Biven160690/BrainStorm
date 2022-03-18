import { NavigateFunction, useNavigate } from 'react-router';
import { Box, Button } from '@mui/material';

import { useStyles } from '../../../../theme/style';

export function FormsButtons() {
  const navigate: NavigateFunction = useNavigate();

  const { formButtons } = useStyles();

  const handleClickGoBack = () => {
    navigate(-1);
  };

  return (
    <Box className={formButtons}>
      <Button type='button' color='primary' onClick={handleClickGoBack}>
        Cancel
      </Button>
      <Button type='submit' color='success'>
        Save
      </Button>
    </Box>
  );
}
