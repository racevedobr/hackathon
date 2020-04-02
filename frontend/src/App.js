import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <Routes history={history} />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
