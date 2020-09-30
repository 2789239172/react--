import React from 'react'

export default class stateComp extends React.Component {
  /* 
    组件中的状态
    setState 会引起视图的重绘
      - 在控的情况下是异步, 在非可控的情况下是同步
  */
  constructor(props) {
    super(props)
    this.state = {
      count: 10
    }
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log('回调count', this.state.count);
    })
    console.log('同步count',this.state.count);
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    // console.log(this);
    return (
      <div>
        <h2>state</h2>
        <div>{this.state.count}</div>
        <div>
          <button onClick={this.decrement}>sub</button>
          <button onClick={this.increment}>add</button>
        </div>
      </div>
    )
  }
}