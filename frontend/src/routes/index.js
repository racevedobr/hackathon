import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Signin from '../pages/Signin';
import SignUp from '../pages/SignUp';
import Main from '../pages/Main';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/register" component={SignUp} />

      <Route path="/main" component={Main} isPrivate />
    </Switch>
  );
}
