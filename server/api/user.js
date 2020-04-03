const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../modules/User');

// 登录
router.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    // 1. 查询用户邮箱是否存在
    const user = await User.findOne({
        where: {email}
    });

    if (!user) {
        return res.json({code: 1, data: null});
    }

    // 2. 校验密码, 对比hash(123456: $2b$10$zvz96nKnpz6QrGrNFOZ0lOhrN52C9Itp5pJ7eow7PcOjgfjEC9Toy)
    const isValid = require("bcrypt").compareSync(password, user.password);
    if (!isValid) {
        return res.json({code: 1, data: null});
    }

    const { id } = user;
    const token = jwt.sign({id}, 'react_admin_secret');
    res.json({code: 0, data: token});
});

// 用户列表
router.get('/api/users', async(req, res) => {
    const users = await User.findAll();
    return res.json({
        code: 0,
        data: users
    });
});

// 新增用户
router.post('/api/user', (req, res) => {
    const { email, password } = req.body;
    User.create({ email, password }).then(() => res.json({code: 0}));
});

// 修改用户
router.patch('/api/user/:id', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findByPk(req.id);
    if (!user) {
        return res.json({code: 1, data: null});
    }
    if (email) {
        user.email = email;
    }
    if (password) {
        user.password = password;
    }
    user.save().then(() => res.json({ code: 0 }));
});

// 删除用户
router.delete('/api/user/:id', (req, res) => User.destroy({where: {id: req.id}}).then(() => res.json({code: 0})));

module.exports = router;