import React from 'react'

export default class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    error: null,
    errorInfo: null
  }

  // render() 函数抛出错误，该函数可以捕捉到错误信息，并且可以展示相应的错误信息，这个方法真的很赞！
  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error,
      errorInfo
    })
  }

  render() {
    console.log(this.state.error);
    if (this.state.hasError) {
      return <div>{this.props.render?.(this.state.error, this.state.errorInfo)|| '组件出错了'}</div>
    }
    return this.props.children
  }
}