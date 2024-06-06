const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Target@123', {
  port: '3307',
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
