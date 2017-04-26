import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import '../stylesheets/global.scss';

const Awesome = () => (
  <div>LevineWork is Awesome!
  </div>
);

export default () => (
  <div className={'home-header'}>
    <div className={'header-title'}>Levine Analytics Blog</div>
    <Link to="/">Home</Link>
    <Link to="/Route">Routes</Link>
    <Link to="/Habits">Habits</Link>
    <Switch >
      <Route exact path="/Route" component={Awesome} />
    </Switch>
  </div>
);

