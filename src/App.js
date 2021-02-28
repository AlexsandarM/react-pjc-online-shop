import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StateProvider } from './context/StateProvider';
import reducer, { initialState } from './context/contextReducer';

// components
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <Switch>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/login'>
            <h1>Login Page</h1>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </StateProvider>
  );
}

export default App;
