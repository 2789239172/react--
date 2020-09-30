import React from 'react'
/* 
  + componentWillMount: 在组件渲染之前执行
  + componentDidMount: 在组件渲染之后执行
  + shouldComponentUpdate: 返回 true || false, 代表允许改变\不允许改变
  + componentWillUpdate: 数据在改变之前组件即将更新时执行
  + componentDidUpdate: 数据修改完成, 组件更新后触发
  + componentWillReceiveProps: prop发生改变执行
  + componentWillUnmount: 组件卸载前执行
*/

export default class Life extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  componentWillMount() {
    console.log('在组件渲染之前执行');
  }
  componentDidMount() {
    console.log('在组件渲染之后执行');
  }
  shouldComponentUpdate() {
    console.log('返回 true || false, 代表允许改变/不允许改变');
    return true
  }
  componentWillUpdate() {
    console.log('数据在改变之前组件即将更新时执行');
  }
  componentDidUpdate() {
    console.log('数据修改完成, 组件更新后触发');
  }
  componentWillReceiveProps() {
    console.log('prop发生改变执行');
  }
  componentWillUnmount() {
    console.log('组件卸载前执行');
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })   
  }

  // 使用父传入的函数改变父组件的数据
  changeTitle = () => {
    this.props.changeText('hei')
  }

  render() {
    return (
    <div>
      <h2 onClick={this.changeTitle}>{this.props.text}</h2>
      生命周期{this.state.count} <button onClick={this.increment}>+</button>
    </div>
    )
  }
}