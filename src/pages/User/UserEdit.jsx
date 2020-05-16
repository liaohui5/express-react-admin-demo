import React from "react";
import { Button, Form, Input, message } from "antd";
import { connect } from "react-redux";
import * as userActions from "../../store/actions/users";
import { bindActionCreators } from "redux";

class UserEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      id: null,
      email: "",
      password: "",
      title: "创建用户",
      btnText: "添加用户",
      btnFunc: this.createUser,
    };
  }

  componentDidMount() {
    console.log(this.props);
    const { id } = this.props.match.params;
    if (id) {
      this.props.userActions
        .getUserDetailAction(id)
        .then((res) => {
          this.setState({
            editMode: true,
            id,
            title: "修改用户信息",
            btnText: "确定修改",
            btnFunc: this.updateUser,
            email: res.email,
            password: res.password,
          });
        })
        .catch((err) => {
          console.log(err);
          message.error("用户信息获取失败");
        });
    }
  }

  // 检查数据的正确性
  check = () => {
    const { email, password } = this.state;
    const emailReg = /^[A-Za-zd0-9]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
    if (!emailReg.test(email)) {
      message.error("邮箱格式有误");
      return false;
    }
    if (password.length < 6) {
      message.error("密码至少6位字符");
      return false;
    }
    return true;
  };

  // 创建用户
  createUser = () => {
    if (this.check()) {
      const { email, password } = this.state;
      this.props.userActions
        .createUserAction({ email, password })
        .then(() => {
          message.success("用户创建成功");
          this.props.history.push("/user/list");
        })
        .catch((err) => {
          console.log(err);
          message.error("用户创建失败");
        });
    }
  };

  // 修改用户信息
  updateUser = () => {
    if (this.check()) {
      const { email, password, id } = this.state;
      this.props.userActions
        .updateUserAction({ id, user: { email, password } })
        .then(() => {
          message.success("用户信息修改成功");
          this.props.history.push("/user/list");
        })
        .catch((err) => {
          console.log(err);
          message.error("用户信息修改失败");
        });
    }
  };

  render() {
    const { title, email, password, btnFunc, btnText, editMode } = this.state;
    return (
      <Form>
        <Form.Item>
          <h2 style={{ fontSize: 30 }}>{title}</h2>
        </Form.Item>

        {/* 邮箱 */}
        <Form.Item>
          <Input
            type="input"
            value={email}
            onChange={(e) => this.setState({ email: e.target.value })}
            placeholder="请输入邮箱"
          />
        </Form.Item>

        {/* 密码 */}
        <Form.Item>
          <Input
            type={editMode ? "text" : "password"}
            value={password}
            onChange={(e) => this.setState({ password: e.target.value })}
            placeholder="请输入密码"
          />
        </Form.Item>

        {/* 按钮 */}
        <Form.Item>
          <Button onClick={() => btnFunc()} type="primary">
            {btnText}
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.userReducer.users,
});

const mapDispatchToProps = (dispatch) => ({
  userActions: bindActionCreators(userActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);
