import React from "react";
import { Layout, Menu } from 'antd';
import { Link, Switch as SwitchRouter, Router, Redirect } from 'react-router-dom';
import '../assets/css/main.css';
import UserList from "./User/UserList";
import UserEdit from "./User/UserEdit";

const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;

class MainLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };
    }

    switchRoute = menu => {
        console.log(menu);
    };

    render() {
        return (
            <Layout className="main-container">
                {/* 侧边栏 */}
                <Sider>
                    <div className="logo">React Admin</div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['']}>
                        <SubMenu onClick={this.switchRoute} key="user" title={<span>用户管理</span>}>
                            <Menu.Item key="/user/edit">用户编辑</Menu.Item>
                            <Menu.Item key="/user/list">用户列表</Menu.Item>
                        </SubMenu>
                        <SubMenu onClick={this.switchRoute} key="article" title={<span>文章管理</span>}>
                            <Menu.Item key="/article/edit">文章编辑</Menu.Item>
                            <Menu.Item key="/article/list">文章列表</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>

                {/* 中间内容和顶部 */}
                <Layout>
                    <Header className="main-header" style={{ padding: 0 }}>
                        <div className="welcome">你好, admin</div>
                        <Link replace to="/login">注销登录</Link>
                    </Header>
                    <Content className="main-content">
                        <p>content</p>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default MainLayout;
