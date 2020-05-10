import React from "react";
import { Layout, Menu } from "antd";
import { Route, Switch, Redirect } from "react-router-dom";
import UserList from "./User/UserList.jsx";
import UserEdit from "./User/UserEdit.jsx";
import ArticleEdit from "./Article/ArticleEdit";
import ArticleList from "./Article/ArticleList";
import { connect } from "react-redux";
import { logoutAction } from "../store/actions";
import "../assets/css/main.css";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Main extends React.Component {
  // 检查登录
  componentDidMount() {
    if (!this.props.authUser && !localStorage.getItem("token")) {
      this.props.history.replace("/login");
      return;
    }
  }

  // 跳页面
  toPage = (e) => {
    this.props.history.replace(e.key);
  };

  // 退出登录
  logout = () => {
    this.props.logout();
    this.props.history.push("/login");
  };

  render() {
    // 子路由
    const childRoutes = (
      <Switch>
        <Route path="/user/list" component={UserList} />
        <Route strict exact path="/user/edit/:id?" component={UserEdit} />
        <Route path="/article/list" component={ArticleList} />
        <Route path="/article/edit" component={ArticleEdit} />
        <Redirect to="/user/list" />
      </Switch>
    );

    return (
      // 侧边栏
      <Layout className="main-container">
        <Header className="header">
          <div className="logo">React Admin</div>
          <ul className="right-btns">
            <li onClick={() => this.logout()}>注销登录</li>
          </ul>
        </Header>
        <Layout>
          <Sider width={250} className="site-layout-background">
            <Menu
              theme="dark"
              onClick={this.toPage}
              mode="inline"
              defaultOpenKeys={["user"]}
            >
              <SubMenu key="user" title={<span>用户管理</span>}>
                <Menu.Item key="/user/list">用户列表</Menu.Item>
                <Menu.Item key="/user/edit">用户编辑</Menu.Item>
              </SubMenu>
              <SubMenu key="article" title={<span>文章管理</span>}>
                <Menu.Item key="/article/list">文章列表</Menu.Item>
                <Menu.Item key="/article/edit">文章编辑</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            {/* 子路由 */}
            <Content className="content-container">{childRoutes}</Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  authUser: state.authUser,
});

const mapActionToProps = (dispatch) => ({
  logout: () => dispatch(logoutAction),
});

export default connect(mapStateToProps, mapActionToProps)(Main);
