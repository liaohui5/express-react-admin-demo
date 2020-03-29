import React from 'react';
import {Button, Card, Form, Input, message} from 'antd';
import '../assets/css/login.css';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  login() {
    const {email, password} = this.state;
    const emailReg = /^[A-Za-zd0-9]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
    if (!emailReg.test(email)) {
      message.error('邮箱格式有误');
      return;
    }
    if (password.length < 6) {
      message.error('密码至少6位字符');
      return;
    }

  }

  render() {
    return (
      <div className="login-card">
        <Card title="登录">
          <Form>
            {/* 邮箱 */}
            <Form.Item>
              <Input
                type='input'
                onChange={(e) => this.setState({email: e.target.value})}
                size='large' placeholder='输入邮箱'/>
            </Form.Item>

            {/* 密码 */}
            <Form.Item>
              <Input
                type='password'
                onChange={(e) => this.setState({password: e.target.value})}
                size="large" placeholder="密码"/>
            </Form.Item>

            {/* 登录按钮 */}
            <Form.Item>
              <Button onClick={() => this.login()} type="primary">登录</Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Login;

