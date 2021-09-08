import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CardCreation from './components/CardCreation';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/' component={CardCreation} />
      </Router>
    </Provider>
  );
}

export default App;
