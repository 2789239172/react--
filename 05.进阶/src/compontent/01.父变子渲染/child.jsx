import React from 'react'

/* 
  通过生命周期防止渲染
*/
// export default class Child extends React.Component {
//   shouldComponentUpdate(nextProps, nextState) {
//     if (nextProps.num === this.props.num) {
//       return false
//     } else {
//       return true
//     } 
//   }

//   render() {
//     console.log('child -> render');
//     return (
//       <div>
//         Child: {this.props.num}
//       </div>
//     )
//   }
// }

/* 
  通过继承PureComponent 来进行数据浅比对, 无法处理复杂数据
*/
export default class Child extends React.PureComponent {
  render() {
    console.log('child -> render');
    return (
      <div>
        Child: {this.props.num}
      </div>
    )
  }
}