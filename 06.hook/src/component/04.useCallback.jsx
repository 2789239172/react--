import React, { useState, useEffect, useCallback } from 'react'

/* 
  返回一个函数, 第二个参数用于设定那些数据发生变化时才可以执行该函数, 
  用于一些由关联性的数据更改
*/
export default () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  return (
    <div>
      {count}
      <button onClick={() => {setCount(count+1)}}>add</button>
      {count2}
      <button onClick={ useCallback(() => setCount2(count2+1), [count])}>add</button>
    </div>
  )
}
