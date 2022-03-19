import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

interface MyTheme {
  itemsPosition?: {
    display?: string;
    justifyContent?: string;
  };
}

export const useStyles = makeStyles((theme: Theme & MyTheme) => ({
  header: {
    ...theme.itemsPosition,
  },

  headerButtons: {
    ...theme.itemsPosition,
    width: 170,
  },

  main: {
    padding: '80px 20px 20px 20px',
    minHeight: 'calc(100vh - 50px)',
  },

  footer: {
    height: '50px',
    backgroundColor: 'rgb(219, 224, 228)',
  },

  footerContent: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  flashCardsDeck: {
    position: 'relative',
    '& a': {
      textDecoration: 'none',
    },
  },

  flashCardsDeckContent: {
    display: 'flex',
    flexDirection: 'column',
    '& p': {
      paddingTop: 10,
    },
  },

  flashCardsDeckActions: {
    position: 'absolute',
    right: 9,
    bottom: 2,
  },

  backSideCard: {
    position: 'relative',
  },

  flashCard: {
    position: 'relative',
  },

  flashCardContent: {
    display: 'flex',
    height: 100,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  flashCardDeleteButton: {
    position: 'absolute',
    right: 9,
    bottom: 5,
  },

  flashCardRating: {
    position: 'absolute',
    left: 9,
    bottom: 9,
    '& button': { marginRight: 4 },
  },

  flashCardAction: {
    height: 40,
  },

  formTitle: { textAlign: 'center' },

  formInputs: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 20,
    '& .MuiInputBase-root': { margin: 5 },
  },

  formButtons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },

  notFound: {
    position: 'absolute',
    width: '100%',
    top: '40%',
    display: 'flex',
    justifyContent: 'center',
  },

  notFoundContent: {
    display: 'flex',
    flexDirection: 'column',
    '& h6': {
      textAlign: 'center',
    },
  },

  error: {
    width: 400,
    height: 150,
    color: 'red',
    '&': {
      textAlign: 'center',
    },
  },

  loading: {
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
}));
