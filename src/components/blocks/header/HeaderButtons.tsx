import { Link } from 'react-router-dom';

import { Add } from '@mui/icons-material';
import { Box, Button } from '@mui/material';

import { useStyles } from '../../../theme/style';

interface HeaderButtonsProps {
  handleClickOpenForm: () => void;
}

export function HeaderButtons({ handleClickOpenForm }: HeaderButtonsProps) {
  const { headerButtons } = useStyles();

  return (
    <Box className={headerButtons}>
      <Button
        variant='outlined'
        onClick={handleClickOpenForm}
        color='success'
        startIcon={<Add />}>
        Add
      </Button>
      <Button component={Link} to='/decks' color='inherit'>
        Decks
      </Button>
    </Box>
  );
}
