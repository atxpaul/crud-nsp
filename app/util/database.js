const Sequelize = require('sequelize');

//GET ENV VARIABLES

const sequelize = new Sequelize(
    process.env.PGDATABASE,
    process.env.PGUSER,
    process.env.PGPASSWORD,
    {
        host: process.env.HOST,
        dialect: 'postgres'
    });

module.exports = sequelize;