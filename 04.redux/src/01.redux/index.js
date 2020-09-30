import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* 
  redux 和react-redux的区别
    redux: js的状态管理
    react-redux: 为了在react中更容易的使用
*/
import { createStore } from 'redux'
import counter from './reducers/counter'
// 创建store
const store = createStore(counter)
// 设置监听
store.subscribe(() => {
  render()
  console.log('state:', store.getState())
})

function render() {
  ReactDOM.render(
    <App
      onIncrement={() => { store.dispatch({ type: 'INCREMENT' }) }}
      onDecrement={() => { store.dispatch({ type: 'DECREMENT' }) }}
      value={store.getState()}
    />,
    document.getElementById('root')
  );
}
render()
