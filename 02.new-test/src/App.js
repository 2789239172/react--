import React, {useState} from 'react';

// 组件 
import Fi from './component/01.firstComp'
// 状态 
import StateComp from './component/02.stateComp'
// 生命周期
import LifeComp from './component/03.lifeComp'
// 条件渲染
import IfComp from './component/04.ifComp'
// 受控组件
import FormComp from './component/05.FormComp'
// 非受控组件和refs
import RefComp from './component/06.refComp'
// 组合vs继承 组合完胜
import Group from './component/07.组合'
// prop类型与默认值
import PropType from './component/08.propTypes'

function App() {
  const [text, setText] = useState('haha');
  let changeText = (a) => {
    setText(a)
  }
  return (
    <div className="App">
        0.0
        <Fi name="haha"></Fi>.
        <StateComp />
        <LifeComp text={text} changeText={changeText}/>
        <IfComp />
        <FormComp />
        <RefComp />
        <Group >
          <li>2</li>
          <li>23</li>
        </Group>
        <PropType />
    </div>
  );
}

export default App;
