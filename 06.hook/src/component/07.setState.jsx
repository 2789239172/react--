import React from 'react'
export default class SetState extends React.Component {
  state = {
    count: 0
  }

  // setState 当前情况下是异步操作
  // setState 同步和异步问题
  // 有多个setState 会被合并执行, 之后依次调用回调函数
  componentDidMount() {
    // 这里有三个setState 但是页面输出为1
    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log(this.state.count);
    })
    this.setState({
      count: this.state.count + 1
    })
    // this.setState({
    //   count: this.state.count + 1
    // })


    // 使用函数包裹, 通过prevState设定值 页面显示3
    this.setState((prevState, props) => ({
      count: prevState.count + 1
    }), () => console.log(this.state.count))

    this.setState((prevState, props) => ({
      count: prevState.count + 1
    }))

    this.setState((prevState, props) => ({
      count: prevState.count + 1
    }))

  }

  render() {
    const { count } = this.state

    // console.log(count);
    return (
      <div> { count}</div >
    )
  }
}