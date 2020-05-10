import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Table, Button } from "antd";
import { removeUserAction, getUsersAction } from "../../store/actions";

class UserList extends React.Component {
  
  // 用户用户信息
  componentDidMount() {
    this.props.getUsers();
  }

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
          <Button type="danger" onClick={() => this.props.removeUser(id)}>
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
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  removeUser: (id) => dispatch(removeUserAction(id)),
  getUsers: () => dispatch(getUsersAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
