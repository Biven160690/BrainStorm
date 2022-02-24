import { ThemeProvider } from '@mui/material/styles'

import { RootRouter } from "../router/RootRouter";

import { theme } from "../theme/theme";

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <RootRouter />
    </ThemeProvider>
  );
}

export default App;
