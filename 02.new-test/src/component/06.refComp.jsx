import React from 'react'

export default class RefsComp extends React.Component {
  constructor() {
    super()
    this.helloDiv = React.createRef()
    this.input = React.createRef()
  }

  componentDidMount() {
    console.log(this.helloDiv);
    this.helloDiv.current.style.color = "red"
  }

  handle = () => {
    console.log(this.input.current.value);
  }

  render() {
    return (
      <div>
          refs和dom
          <div ref={this.helloDiv}>hello</div>
          <input type="text" ref={this.input} onKeyDown={this.handle}/>
      </div>
    )
  }
}