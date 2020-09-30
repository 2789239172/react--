import React from 'react';

// 父更新子渲染
// import OneComp from './compontent/01.父变子渲染/parent'

// 组件根元素 
// import Fr from './compontent/02.组件根元素/index'

// 多层传prop
// import Demo3 from './compontent/03.跨层的props'

//高阶组件 
// import Demo4 from './compontent/04.高阶组件'

// 错误边界
import Demo5 from './compontent/05.错误边界'

function App() {
  return (
    <div className="App">
        {/* <OneComp></OneComp> */}
        {/* <Fr /> */}
        {/* <Demo3></Demo3> */}
        {/* <Demo4></Demo4> */}
        <Demo5></Demo5>
    </div>
  );
}

export default App;
