const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,   // ✅ DB_PASSWORD 사용
    {
        host: process.env.DB_HOST,
        dialect: "mysql",
        logging: false,
    }
);

module.exports = sequelize;
