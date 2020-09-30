import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* 
  redux 和react-redux的区别
    redux: js的状态管理
    react-redux: 为了在react中更容易的使用
*/
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// import counter from './reducers/counter'
import rootReducer from './reducers/index'

// 创建store
const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
