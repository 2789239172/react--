import React from 'react'
import Child from './child'

export default class Parent extends React.Component {
  state = {
    num: 0
  }
  
  componentDidMount() {
    setInterval(() => {
      this.setState({
        num: this.state.num + 1
      })
    }, 1000)
  }

  render() {
    return (
      <div>
        parent: {this.state.num}
        <Child num={0}></Child>
      </div>
    )
  }
}