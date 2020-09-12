import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './state/store'


/* 
  1. Зарядка
  2. 7:00 - 18:30 (9:00)
    Работа минимум
    Учеба JS || Учеба ПО вечер
  3. 20:00 Тренировка
*/

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
