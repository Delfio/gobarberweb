/* eslint-disable import/no-unresolved */
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

import store from './store';

//Styles global, pode ser colocado em qualquer lugar
import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
    <Router history ={history}>
      <Routes />
      <GlobalStyle />
    </Router>
    </Provider>
  )
}

export default App;
