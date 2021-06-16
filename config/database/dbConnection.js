require('dotenv').config();
const Sequelize = require('sequelize');

// const connection = new Sequelize('iscodec1_mensagem', 'iscodec1_devEdvaldo', 'pr06390721', {
//     host: 'localhost',
//     dialect: 'mysql'
// });

const connection = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, '', {
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION
});


module.exports = connection;


