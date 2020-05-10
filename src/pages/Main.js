import React from "react";
import { Layout, Menu } from "antd";
import { Route, Switch, Redirect } from "react-router-dom";
import UserList from "./User/UserList";
import UserEdit from "./User/UserEdit";
import ArticleEdit from "./Article/ArticleEdit";
import ArticleList from "./Article/ArticleList";
import { connect } from "react-redux";
import "../assets/css/main.css";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Main extends React.Component {
  // 检查登录
  componentDidMount() {
    if (!this.props.user && !localStorage.getItem("token")) {
      this.props.history.replace("/login");
      return;
    }
  }

  toPage = (e) => {
    this.props.history.replace(e.key);
  };

  render() {
    // 子路由
    const childRoutes = (
      <Switch>
        <Route path="/user/list" component={UserList} />
        <Route path="/user/edit/:id?" component={UserEdit} />
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


export default connect()(Main);
