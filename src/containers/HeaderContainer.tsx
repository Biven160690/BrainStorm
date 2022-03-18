import {
  NavigateFunction,
  PathMatch,
  useLocation,
  useMatch,
  useNavigate,
} from 'react-router';

import { AppBar, Toolbar } from '@mui/material';

import { HeaderButtons } from '../components/blocks/header';
import { HeaderLinks } from '../components/blocks/header';

import { useStyles } from '../theme/style';

export function HeaderContainer() {
  const { header } = useStyles();

  const { pathname } = useLocation();

  const navigate: NavigateFunction = useNavigate();

  const match: PathMatch<string> | null = useMatch('/');

  const addDeckPath: string = match
    ? `${pathname + 'add-deck'}`
    : `${pathname}/${'add-deck'}`;

  const openAddDeckForm = () => {
    navigate(addDeckPath, { state: { open: true } });
  };

  return (
    <AppBar color='inherit' role='toolbar'>
      <Toolbar className={header}>
        <HeaderLinks />
        <HeaderButtons handleClickOpenForm={openAddDeckForm} />
      </Toolbar>
    </AppBar>
  );
}
