import { ThemeProvider } from '@material-ui/core';
import { Theme } from 'theme';
import Router from 'Router';

const App = () => (
  <ThemeProvider theme={Theme}>
    <Router />
  </ThemeProvider>
);

export default App;
