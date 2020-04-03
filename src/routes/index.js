import Login from "../pages/Login";
import Main from "../pages/Main";
import UserEdit from "../pages/User/UserEdit";
import UserList from "../pages/User/UserList";

export default [
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/',
        component: Main,
        strict: true,
        children: [
            {
                path: '/user/list',
                component: UserList,
            },
            {
                path: '/user/edit',
                component: UserEdit,
            },
            // {
            //     path: '/article/list',
            //     component: UserList,
            // },
            // {
            //     path: '/article/edit',
            //     component: UserEdit,
            // },
        ]
    },
];

