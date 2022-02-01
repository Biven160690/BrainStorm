import { createTheme, Theme } from "@material-ui/core";

declare module '@material-ui/core/styles/createTheme' {
  interface ThemeOptions {    
    itemsPosition: {
      display?: string,
      justifyContent?: string,
    },
  }
}

let theme: Theme = createTheme({
  itemsPosition: {
    display: "flex",
    justifyContent: "space-between",
  },
});

export default theme;
