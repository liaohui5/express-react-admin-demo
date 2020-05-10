## react-admin-demo

- 一个简单的 react 全家桶的练习项目

## 主要实现功能

- 路由设计
- 登录
- 用户增删改查

## 主要技术栈

> 客户端

- react
- react-router-dom
- redux
- react-redux
- redux-thunk
- antd

> 服务端

- nodejs
- express
- sequelize
- mysql

## 如何启动

- 客户端

```bash
npm start # or yarn start
```

- 服务端

1. 创建一个 `react_admin` 的数据库
2. 创建一个 `admins` 表 结构看 `MySQl 数据`
3. 修改数据库连接参数 `/server/modules/db.js`
4. 启动服务端

```bash
npm run server
```

## MySQl 数据

```sql
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admins
-- ----------------------------
DROP TABLE IF EXISTS `admins`;
CREATE TABLE `admins`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '管理员ID',
  `email` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '管理员邮箱',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '管理员密码',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admins
-- ----------------------------
INSERT INTO `admins` VALUES (1, 'admin@qq.com', '$2b$10$VimKqN8dmDycFxw5zKhb/ejL0yP8HC/PzKAUHafplcRtB4syUAZKW');
INSERT INTO `admins` VALUES (2, 'abc@qq.com', '$2b$10$z465SD2dtTz4syh9JKt2SOA8vegnJ9TLe1WqH76s.DJsuzMHZLqfO');

SET FOREIGN_KEY_CHECKS = 1;
```

## 账号密码

- 账号: admin@qq.com
- 密码: 123456
