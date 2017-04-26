import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { browserHistory } from 'react-router';
import Home from './Home';
import Header from './Header';
import Habits from './Habits';

// const Page = () => (
//   <div>
//     <Home />
//   </div>
// );

export default () => (
  <Router history={browserHistory}>
    <div>
      <Header />
      <Switch>
        <Route path="/Habits" component={Habits} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  </Router>
);

