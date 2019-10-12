/* eslint-disable import/no-unresolved */
import React from 'react';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

//Styles global, pode ser colocado em qualquer lugar
import GlobalStyle from './styles/global';

function App() {
  return (
    <Router history ={history}>
      <Routes />
      <GlobalStyle />
    </Router>
  )
}

export default App;
