import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";

class App extends React.Component {
  render() {
    return (
      // 路由设计: 一级路由(App.js)  二级路由(pages/Main.js)
      // |- 登录页(/login)
      // |- 后台首页(/)
      // |-- 用户列表页(/users)
      // |-- 用户编辑页(/user/edit)
      // |-- 文章列表页(/articles)
      // |-- 文章编辑页(/article/edit)
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" render={(props) => <Main {...props} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}


export default App;
