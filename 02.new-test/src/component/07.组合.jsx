import React from 'react'

export default class RefsComp extends React.Component {
  render() {
    return (
    <ul>{this.props.children}</ul>
    )
  }
}