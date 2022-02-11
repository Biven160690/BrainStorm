import { Link, PathMatch, useLocation, useMatch } from 'react-router-dom'
import { Add } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link as Links } from '@mui/material';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

import { useStyles } from '../../theme/style';

import { ADD_DECK_FORM } from '../constants';

function Header() {
  const { header, headerButtons } = useStyles()

  const { pathname } = useLocation()
  
  const match: PathMatch<string> | null = useMatch('/')

  const url: string = match ? `${pathname + ADD_DECK_FORM}` : `${pathname}/${ADD_DECK_FORM}`

  return (
    <AppBar color='inherit'>
      <Toolbar className={header}>
        <Links component={Link} to='/' underline="none">
          <Typography variant='h5'>BrainStorm</Typography>
        </Links>
        <Box className={headerButtons}>
          <Button variant="outlined" component={Link} to={url} state={{ open: true }} color="success" startIcon={<Add />} >Add</Button>
          <Button component={Link} to='/decks' color="inherit">Decks</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
