import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Table, Button } from 'antd';
import { removeUserAction } from '../../store/actions';

class UserList extends React.Component {
  render() {
    const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '邮箱',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: '密码',
        dataIndex: 'password',
        key: 'password',
      },
      {
        title: '修改',
        dataIndex: 'id',
        key: 'id',
        render: (id) => (<Link to={`/user/edit/${id}`}>修改</Link>)
      },
      {
        title: '删除',
        dataIndex: 'id',
        key: 'id',
        render: (id) => (<Button type="danger" onClick={() => this.props.removeUser(id)}>删除</Button>)
      }
    ];
    return (
      <div>
        <Table dataSource={this.props.users} columns={columns} rowKey='id'/>
      </div>
    );
  }

}


const mapStateToProps = (state) => {
  return {
    users: state.users
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeUser: (id) => dispatch(removeUserAction(id)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
