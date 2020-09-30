import React from 'react';

import Home from './pages/home'
import My from './pages/my'
import Ucenter from './pages/ucenter'
import Test from './pages/test'
import Wt from './pages/withRouter'
// 嵌套路由
import Book from './pages/book'

// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { HashRouter as Router, Redirect, Switch, Route, Link, NavLink } from 'react-router-dom'

import './style.css'
/* 
  + /my 与 /my/ucenter
      - /my/ucenter 包含了 /my, 所以会显示两个页面, 为/my添加 exact=true 实现精准匹配
      - strict属性可以实现绝对匹配(路径后是否有 / ), 需要与exact一起使用
  + switch 只显示第一个匹配到的路由, 可以将404页面放在最后, 在所有页面都匹配不到时显示
      - switch 也是模糊匹配, 需要与 exact 一同使用
  + NavLike 可以匹配当前的url并设置.active , 
      - 同样可以使用 exact精准匹配
      - 可以使用 activeClassName 属性更改 激活类名
      - 也可以使用 activeStyle 设置样式对象
  + 传参
      - url后 
          + /:id 必须要传入, 不传404
          + /:id? 可传可不传
          + /:id?/:name? 可传入多个
      - 查询字符串
          + 使用new URLSearchParams(props.location.search).get('xx')
          + 引入querystring 使用 querystring.parse(props.location.search)
      - link 使用对象传递
          + to = {
            pathname: '/xx',
            search: '?sort=name',
            hash: '#the-hash',
            state: {fromDashboard: true}  //隐形传参
          } 
  + 重定向
      - <Redirect  from="/" to="/my"></Redirect> 必须放在最后一行
*/
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/home/:id?" component={Home} />
          <Route exact path="/my" component={My} />
          <Route exact path="/my/ucenter" component={Ucenter} />
          <Route exact path="/test" render={(props) => <Test {...props} />} />
          <Book>
            <Switch>
              <Route exact path="/book/1" component={() => 'book1'} />
              <Route exact path="/book/2" component={() => 'book2'} />
            </Switch>
          </Book>
          <Redirect from="/" to="/my"></Redirect>
          <Route component={() => 404} />
        </Switch>
        <ul>
          {/* <li><Link to="/home">home</Link> </li>
          <li><Link to="/my">my</Link></li> */}

          <li><NavLink exact to="/home/a" activeStyle={{ color: '#bfa' }}>home</NavLink> </li>
          <li><NavLink exact to="/my">my</NavLink></li>
          <li><NavLink exact to="/my/ucenter">ucenter</NavLink></li>
          <li><NavLink exact to={{
            pathname: '/test',
            search: '?sort=name',
            hash: '#the-hash',
            state: { fromDashboard: true }
          }} >test</NavLink></li>
        </ul>
        <Wt></Wt>


      </Router>
    </div>
  );
}

export default App;
