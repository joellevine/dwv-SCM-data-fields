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
    <div className={'links'}>
      <Link to="/">Home</Link>
      <Link to="/Route">Routes</Link>
      <Link to="/Habits">Habits</Link>
      <Route exact path="/Route" component={Awesome} />
    </div>
  </div>
);

