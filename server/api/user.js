const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../modules/User");
const authMiddleware = require("../middleware/auth.js");

// 登录
router.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  // 1. 查询用户邮箱是否存在
  const user = await User.findOne({
    where: { email },
  });

  if (!user) {
    return res.json({ code: 1, data: null });
  }

  // 2. 校验密码
  const isValid = require("bcrypt").compareSync(password, user.password);
  if (!isValid) {
    return res.json({ code: 1, data: null });
  }

  const { id } = user;
  const token = jwt.sign({ id }, req.app.get("jwt_secret"));
  const data = {
    token,
    email: user.email,
  };
  res.json({ code: 0, data });
});

// 用户列表
router.get("/api/users", authMiddleware, async (req, res) => {
  const users = await User.findAll();
  return res.json({
    code: 0,
    data: users,
  });
});

// 新增用户
router.post("/api/user", authMiddleware, (req, res) => {
  const { email, password } = req.body;
  User.create({ email, password }).then(() => res.json({ code: 0 }));
});

// 修改用户
router.patch("/api/user/:id", authMiddleware, async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findByPk(req.params.id);
  if (!user) {
    return res.json({ code: 1, data: null });
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
router.delete("/api/user", authMiddleware, (req, res) => {
  User.destroy({ where: { id: req.body.id } }).then(() => {
    return res.json({ code: 0 });
  });
});

// 获取用户详细信息
router.get("/api/user/:id", authMiddleware, async (req, res) => {
  const user = await User.findByPk(req.params.id);
  return res.json({ code: 0, data: user });
});

module.exports = router;
