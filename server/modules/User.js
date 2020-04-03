const sequelize = require('sequelize');
const db = require('./db');

module.exports = db.define('User', {
    id: {
        type: sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: sequelize.STRING
    },
    password: {
        type: sequelize.STRING,
        set(val) {
            return require('bcrypt').hashSync(val, 10);
        }
    }
}, {
    timestamps: false,
    tableName: 'admins',
});
