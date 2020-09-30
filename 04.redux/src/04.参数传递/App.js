import React from 'react';
// 连接store
import {connect} from 'react-redux'

// 1.少量操作
// import {increment, decrement} from './actions/counter'

// 2.大量操作
import * as counterActions from './actions/counter'
import {bindActionCreators} from 'redux'


function App(props) {
  console.log(props)
  return (
    <div className="App">
       <h1>{props.counter}</h1>
       <p>
         {/* 1.少量操作 */}
         {/* <button onClick={props.increment}>increment</button>
         <button onClick={props.decrement}>decrement</button> */}

          {/* 2.大量操作 */}
         <button onClick={() => props.counterActions.increment(5)}>increment</button>
         <button onClick={() => props.counterActions.decrement(10)}>decrement</button>
       </p>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    counter: state
  }
}

// 1.少量操作
// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement())
//   }
// } 

// 2. 大量操作
const mapDispatchToProps = dispatch => {
  return {
    counterActions: bindActionCreators(counterActions, dispatch)
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(App);
