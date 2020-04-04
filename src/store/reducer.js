import * as types from './types';

const defaultState = {
    user: null,
    users: [],
};

const reducer = (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    const { type, payload } = action;
    
    // 登录
    if (type === types.LOGIN) {
        localStorage.setItem('token', payload.token);
        newState.user = payload;
    }

    // 获取用户列表
    if (type === types.GET_USERS) {
        newState.users = payload;
    }

    // 删除用户
    if (type === types.DELETE_USER) {
        newState.users = newState.users.filter(item => item.id !== payload);
    }

    return newState;
};

export default reducer;