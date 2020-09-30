/* 
  react中 只要有一个组件发生错误就会导致页面白屏
*/
import React from 'react'
import Error from './Error'
import ErrorBoundary from './ErrorBoundary'

export default class Demo5 extends React.Component {
  state ={
    count: 0
  }
    
  render() {
    return <div>
      <ErrorBoundary>
        <Error></Error> 
      </ErrorBoundary>
      <h2>{this.state.count}</h2>
      <button onClick={() => this.setState({count: this.state.count + 1})}>add</button>
      <button onClick={() => this.setState({count: this.state.count - 1})}>sub</button>
    </div>
  }
}