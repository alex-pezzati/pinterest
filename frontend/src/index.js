import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import configureStore from './store';
import { restoreCSRF, csrfFetch } from './store/csrf';
import * as sessionActions from './store/session';

// modal testing
import * as modalActions from './store/modal';


const store = configureStore();

// sets state to window for tools if in development
if (process.env.NODE_ENV !== 'production') {
    window.store = store;

    // modal testing
    window.modalActions = modalActions;
}

// fetches csrf if in development
if (process.env.NODE_ENV !== 'production') {
    restoreCSRF();

    window.csrfFetch = csrfFetch;
    window.store = store;
    window.sessionActions = sessionActions;
        // modal testing
    window.modalActions = modalActions;

    console.log(store, 'WHAT IS THIS??!')
    console.log(window.store, 'WHAT IS THIS??!')
    console.log(window.modalActions, 'WHAT IS THIS??!')
}

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root'),
);
