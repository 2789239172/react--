import React,{useContext} from 'react'

const MyContext = React.createContext()

// 子 1. 使用 useContext获取value
// function ChildPage() {
//   return (
//     <p>{useContext(MyContext)}</p>
//   )
// }

// 子 2. 使用 Consumer获取value
// function ChildPage() {
//   return (
//     <MyContext.Consumer>
//     {
//       value => <p>{value}</p>
//     }
//     </MyContext.Consumer>
//   )
// }

// 子 3. 使用类设定 contextType获取value
class ChildPage extends React.Component {
  static contextType = MyContext;
  render() {
    return <p>{this.context}</p>
  }
}
console.log(new ChildPage);

// 父
export default function MainPage() {
  return (
    <div>
      <MyContext.Provider value="hello react use context">
        <ChildPage></ChildPage>
      </MyContext.Provider>
    </div>
  )
}