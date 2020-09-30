import React from 'react'

export default class Error extends React.Component {
  render() {
    return (<div>
      {
        null.map(item => <div>{item}</div>)
      }
    </div>)
  }
}