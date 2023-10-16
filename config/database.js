const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'admin', '123', {
    host: 'localhost',
    dialect: 'sqlite'
});

module.exports = sequelize;