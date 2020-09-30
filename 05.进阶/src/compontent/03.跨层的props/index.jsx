import React from 'react'
import PropTypes from 'prop-types'

/* 
  组件嵌套多层 而最底层需要最顶层传入的props, 可以由每层组件一层一层传递但非常麻烦
    - 为顶层元素设置 childContextTypes, 和 getChildContext() {} 
    - 为最底层的组件设置 contextTypes 
    - 子组件使用 (props, context) 中 context读取
*/

const Topic = (props) => {
  return (
    <div>
        <Comment></Comment>
    </div>
  )
}

const Comment = (props, context) => {
  return (
    <div>
      {context.color}
    </div>
  )
}

export default class Demo3 extends React.Component {
  getChildContext() {
    return {
      color: 'red'
    }
  }
  render() {
    return (
      <div>
        <Topic color="red"></Topic>
      </div>
    )
  }
} 

Demo3.childContextTypes = {
  color: PropTypes.string
}
Comment.contextTypes = {
  color: PropTypes.string
}