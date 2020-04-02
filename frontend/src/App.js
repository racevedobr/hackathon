import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

function App() {
  return (
    <BrowserRouter>
      <Routes history={history} />
    </BrowserRouter>
  );
}

export default App;
