// 受控组件

import React from 'react'
export default class FromComp extends React.Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.value);
  }
  onChangeHandle = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.onChangeHandle}/>
        </form>
      </div>
    )
  }
  
}  