import React from 'react';
// 连接store
import {connect} from 'react-redux'

// 2.大量操作
import * as counterActions from './actions/counter'
import * as userActions from './actions/user'
import {bindActionCreators} from 'redux'


function App(props) {
  let {user, isLoad, err} = props.user
  let name
  if (isLoad) {
    name = 'loading...'
  } else if (user.name) {
    name = user.name
  } else {
    name = err
  }

  return (
    <div className="App">
       <h1>{props.counter}</h1>
       <p>
         <button onClick={() => props.counterActions.increment(5)}>increment</button>
         <button onClick={() => props.counterActions.decrement(10)}>decrement</button>
       </p>

       <div>
            <h2>{name}</h2>
            <button onClick={props.userActions.addUser}>adduser</button>
       </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
    user: state.user
  }
}


const mapDispatchToProps = dispatch => {
  return {
    counterActions: bindActionCreators(counterActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(App);
