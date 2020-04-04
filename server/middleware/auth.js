const jwt = require("jsonwebtoken");
const User = require('../modules/User');
module.exports = async (req, res, next) => {
    const token = req.headers.token;
    if (!token) {
        return res.send({code: 401, msg: '请登录'});
    }
    
    const { id } = await jwt.verify(token, req.app.get('jwt_secret'));
    if (!id) {
        return res.send({code: 401, msg: '请登录'});
    }
    
    const user = await User.findByPk(id);
    if (!user) {
        return res.send({code: 401, msg: '请登录'});
    }
    req.user = user;
    next();
};