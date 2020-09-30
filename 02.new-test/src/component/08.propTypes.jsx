import React from 'react'
import PropTypes from 'prop-types';

export default class SetType extends React.Component {
  render() {
    return (
      <h2>{this.props.title}</h2>
    )
  }
}

//类型验证 https://react.docschina.org/docs/typechecking-with-proptypes.html
SetType.propTypes = {
  title: PropTypes.number
}

// 默认值, 也可使用 static defaultProps 来设置
SetType.defaultProps = {
  title: '我是默认'
}