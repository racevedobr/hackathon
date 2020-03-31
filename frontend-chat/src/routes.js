import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Chat from './pages/Chat';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/chat" component={Chat} />
      </Switch>
    </BrowserRouter>
  );
}
