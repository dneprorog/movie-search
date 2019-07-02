import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { AppWrap } from './ui/ui';

import MoviesList from './components/MoviesList';
import MovieDetail from './components/MovieDetail';

const App = () => (
    <Router>
      <AppWrap>
        <Switch>
          <Route exact path="/" component={MoviesList} />
          <Route path="/:id" component={MovieDetail} />
        </Switch>
      </AppWrap>
    </Router>
);

export default App;
