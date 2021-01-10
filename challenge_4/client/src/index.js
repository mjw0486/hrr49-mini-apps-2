import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App.jsx';
import '../styles/styles.css';
import { createStore } from 'redux';
import allReducer from '../reducers/reducers.js';
import { Provider } from 'react-redux';

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);