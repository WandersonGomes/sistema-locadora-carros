const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('../config/config_database.js');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    role: {
        type: DataTypes.ENUM('admin', 'cliente'),
        defaultValue: 'cliente',
        allowNull: false
    }
});

module.exports = User;