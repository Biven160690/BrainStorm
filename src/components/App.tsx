import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import { RootRouter } from '../routers/RootRouter';

import { theme } from '../theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RootRouter />
    </ThemeProvider>
  );
}

export default App;
