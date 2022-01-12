import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
  },
  header:{
    ...theme.itemsPosition,
  },
  headerButtons: {
    ...theme.itemsPosition,
    width: 170,
  },
  main: {
    marginTop: 50,
    padding: 30,
  },
  footer: {
    position: "fixed",
    bottom: 0,
    zIndex: -1,
    width: "100%",
    height: 80,
    backgroundColor: theme.palette.grey[200],
  },
  footerContext: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  flashCardsDeck: {
    maxWidth: 500,
  },
  flashCardsDeckContext: {
    display: "flex",
    flexDirection: "column",
    "& p": {
      paddingTop: 10,
    },
  },
  flashCardsDeckActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  flashCard: {
    marginTop: 50,
    width: 500,
    height: 180,
  },
  flashCardContext: {
    display: "flex",
    height: 90,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  flashCardAction: {
    ...theme.itemsPosition,
    height: 40,
  },
}));
