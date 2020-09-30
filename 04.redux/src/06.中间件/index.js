import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* 
  redux 和react-redux的区别
    redux: js的状态管理
    react-redux: 为了在react中更容易的使用
*/
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
// import counter from './reducers/counter'
import rootReducer from './reducers/index'

// 中间件
import logger from 'redux-logger'
// const logger = store => next => action => {
//   console.log('dispatch=>', action)
//   let result = next(action) //加载下一个中间件, 使程序继续向下执行, 并且可以在此拿到下个中间件的返回值
//   console.log(result)
//   console.log('next state=>', store.getState())
//   // return result
// }
// const error = store => next => action => {
//   try{
//     // throw 'eeee'
//     next(action)
//   }catch(e) {
//     console.log(e)
//   }
//   return 'error'
// }

// 创建store
// const store = createStore(rootReducer, {}, applyMiddleware(logger, error))
const store = createStore(rootReducer, {}, applyMiddleware(logger))



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
