import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// redux
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/index'


// 中间件
import logger from 'redux-logger'
// redux异步操作需要使用 redux-thunk 作为中间件
import thunk from 'redux-thunk'
// redux调试工具
import {composeWithDevTools} from 'redux-devtools-extension'

// 创建store
const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(logger, thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
