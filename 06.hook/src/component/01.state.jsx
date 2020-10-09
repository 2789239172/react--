import React, { useState } from 'react'

export default () => {
  /* 
    count: 状态
    setCount: setState
    useState(0): 默认值
  */
  const [count, setCount] = useState(0)

  return (
    <div>
      {count}
      <button onClick={() => {setCount(count+1)}}>add</button>
    </div>
  )
}
