import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import AddInput from './AddInput';
import Home from './Home';
import Layout from './Layout';

const theme = createMuiTheme({
  palette: {
    secondary: grey
  }
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/add' exact>
              {' '}
              <AddInput />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
