import React from 'react'
/* 使用React.memo 防止父级数据变化子组件渲染 */
 const Child =  () => {
  console.log('child render');
  return (
    <div>
      父变子渲染test
    </div>
  )
}

export default React.memo(Child)
