const sequelize = require('sequelize');
const db = require('./db');

module.exports = db.define('User', {
    id: {
        type: sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: sequelize.STRING
    },
    password: {
        type: sequelize.STRING,
        set(val) {
            const password = require('bcrypt').hashSync(val, 10);
            this.setDataValue('password', password);
        }
    }
}, {
    timestamps: false,
    tableName: 'admins',
});
