import React from 'react'
// 条件渲染
export default function () {
  let view = true ? <div>true</div> : <div>false</div>
  let list = ['miku', 'rem', 'ram']
  return (
  <div>
    {view}
    <div>
      {list.length ?
        list.map((item, index) => {
          return <p key={index}>{item}</p>
        })
        :
        <div>莫得数据</div>
      }
    </div>
  </div>
  )
}