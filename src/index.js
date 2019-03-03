import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import chat from "./reducers";
import * as serviceWorker from './serviceWorker';

const store = createStore(chat);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

serviceWorker.unregister();
