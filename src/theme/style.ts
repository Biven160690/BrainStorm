import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

interface MyTheme {
  itemsPosition?: {
    display?: string;
    justifyContent?: string;
  };
}

export const useStyles = makeStyles((theme: Theme & MyTheme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
  },

  header: {
    ...theme.itemsPosition,
  },

  headerButtons: {
    ...theme.itemsPosition,
    width: 170,
  },

  main: {
    marginTop: 50,
    padding: 30,
    height: 500
  },

  footer: {
    position: "fixed",
    bottom: 0,
    zIndex: -1,
    width: "100%",
    height: 80,
  },

  footerContext: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  flashCardsDeck: {
    position: "relative",
    width: 400,
    "& a": {
      textDecoration: "none",
    },
  },

  flashCardsDeckContext: {
    display: "flex",
    flexDirection: "column",
    "& p": {
      paddingTop: 10,
    },
  },

  flashCardsDeckActions: {
    position: "absolute",
    top: 90,
    left: 300,
  },

  flashCard: {
    position: "relative",
    width: 380,
    height: "auto",
  },

  flashCardContext: {
    display: "flex",
    height: 90,
    justifyContent: "center",
    alignItems: "flex-end",
  },

  flashCardDeleteButton: {
    position: "absolute",
    top: 130,
    left: 320,
  },

  flashCardAction: {
    height: 40,
  },

  emptyCardsDeck: {
    display: "flex",
    justifyContent: "center",
  },

  formTitle: { textAlign: "center" },

  formInputs: {
    display: "flex",
    justifyContent: "space-between",
    padding: 20,
    "& .MuiInputBase-root": { margin: 5 },
  },

  formButtons: {
    display: "flex",
    justifyContent: "flex-end",
  },

  notFound: {
    position: "absolute",
    width: "100%",
    top: "40%",
    display: "flex",
    justifyContent: "center",
  },

  notFoundContext: {
    display: "flex",
    flexDirection: "column",
    "& h6": {
      textAlign: "center",
    },
  },

  error: {
    width: 400,
    height: 150,
    color: "red",
    "&": {
      textAlign: "center",
    },
  },

  loading: {
    position: "absolute",
    top: "50%",
    left: "50%",
  },
}));
