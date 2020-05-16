import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Table, Button, message } from "antd";
import * as userActions from "../../store/actions/users";
import { bindActionCreators } from "redux";

class UserList extends React.Component {
  // 用户用户信息
  componentDidMount() {
    this.props.userActions.getUsersAction();
  }

  // 删除用户
  removeUser = (id) => {
    this.props.userActions
      .removeUserAction(id)
      .then(() => message.success("删除成功"))
      .catch((err) => {
        console.log(err);
        message.error("删除失败");
      });
  };

  render() {
    const columns = [
      {
        title: "ID",
        dataIndex: "id",
        key: "id",
      },
      {
        title: "邮箱",
        dataIndex: "email",
        key: "email",
      },
      {
        title: "密码",
        dataIndex: "password",
        key: "password",
      },
      {
        title: "修改",
        dataIndex: "id",
        key: "id",
        render: (id) => <Link to={`/user/edit/${id}`}>修改</Link>,
      },
      {
        title: "删除",
        dataIndex: "id",
        key: "id",
        render: (id) => (
          <Button type="danger" onClick={() => this.removeUser(id)}>
            删除
          </Button>
        ),
      },
    ];
    return (
      <div>
        <Table dataSource={this.props.users} columns={columns} rowKey="id" />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.userReducer.users,
});

const mapDispatchToProps = (dispatch) => ({
  userActions: bindActionCreators(userActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
