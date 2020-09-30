import React, {Fragment} from 'react'
/* 
  react 每个组件都需要有一个根元素包裹, 造成了多余的dom渲染
  使用Fragment 或 <></> 可以起到包裹的作用且不会被解析到页面中
*/
export default class Fr extends React.Component {
  render() {
    return (
      // <Fragment>
      //     哈哈
      // </Fragment>
      <>
        heihei
      </>
    )
  }
}