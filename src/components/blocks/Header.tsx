import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Add } from '@mui/icons-material';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { useStyles } from '../../theme/style'

function Header() {
  const { header, headerButtons } = useStyles()
  return (
    <AppBar color='inherit'>
      <Toolbar className={header}>
        <Link href="#" underline="none">
          <Typography variant='h5'>BrainStorm</Typography> 
        </Link>
        <Box className={headerButtons}>
          <Button variant="outlined" color="success" startIcon={<Add />} >Add</Button>
          <Button color="inherit">Decks</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
