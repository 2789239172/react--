import React, { useState, useEffect } from 'react'
import Test from './03.repetition-render'

export default () => {
  const [count, setCount] = useState(0)

  /* 
    + hook使用useEffect 来代替生命周期:
      - componentDidMount
      - componentDidUpdate
      - componentWillUnmount

    + 使用第二个参数以数组的形式设置为哪个生命周期
      - 无: componentDidMount, componentDidUpdate
      - []: componentDidMount
      - [count]: 监听count变化时触发
      - 第二个参数是用来指定didUpdate监听数据的

    + return 一个函数作为componentWillUnmount
  */
 useEffect(() => {
  document.title = count
 }, [])

  return (
    <div>
      {count}
      <button onClick={() => {setCount(count+1)}}>add</button>
      <Test></Test>
    </div>
  )
}
