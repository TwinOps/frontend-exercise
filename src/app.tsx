import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './pages';
import Exercise1 from './pages/exercise-1';
import Exercise2 from './pages/exercise-2';

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/exercise-1" exact>
        <Exercise1 />
      </Route>
      <Route path="/exercise-2" exact>
        <Exercise2 />
      </Route>
    </Switch>
  );
};

export default App;
