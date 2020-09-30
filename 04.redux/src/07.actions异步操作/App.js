import React from 'react';
// 连接store
import {connect} from 'react-redux'

// 2.大量操作
import * as counterActions from './actions/counter'
import {bindActionCreators} from 'redux'


function App(props) {
  return (
    <div className="App">
       <h1>{props.counter}</h1>
       <p>
         <button onClick={() => props.counterActions.increment(5)}>increment</button>
         <button onClick={() => props.counterActions.decrement(10)}>decrement</button>
       </p>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}


const mapDispatchToProps = dispatch => {
  return {
    counterActions: bindActionCreators(counterActions, dispatch)
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(App);
