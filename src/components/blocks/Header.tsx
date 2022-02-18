import { Link, PathMatch, useLocation, useMatch } from "react-router-dom";
import { Add } from "@mui/icons-material";
import { AppBar, Box, Button, Typography, Toolbar, Link as Links } from "@mui/material";

import { useStyles } from "../../theme/style";

import { ADD_DECK_FORM } from '../constants';

interface HeaderProps {
  handelClick: (url: string) => () => void
}

export function Header({ handelClick }: HeaderProps) {
  const { header, headerButtons } = useStyles()

  const { pathname } = useLocation()
  
  const match: PathMatch<string> | null = useMatch('/')

  const url: string = match ? `${pathname + ADD_DECK_FORM}` : `${pathname}/${ADD_DECK_FORM}`

  return (
    <AppBar color="inherit" role="toolbar">
      <Toolbar className={header}>
        <Links component={Link} to="/" underline="none">
          <Typography variant="h5">BrainStorm</Typography>
        </Links>
        <Box className={headerButtons}>
          <Button
            variant="outlined"
            onClick={handelClick(url)}
            color="success"
            startIcon={<Add />}
          >
            Add
          </Button>
          <Button component={Link} to="/decks" color="inherit">
            Decks
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

