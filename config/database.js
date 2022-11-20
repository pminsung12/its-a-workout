const mysql = require('mysql2/promise');
require('dotenv').config();

// 배포 시에는 pool 세팅 변경해야 함
const pool = mysql.createPool({
    host: process.env.MYSQL_LOCAL_HOST,
    user: process.env.MYSQL_USERNAME,
    port: process.env.MYSQL_PORT,
    password: process.env.MYSQL_LOCAL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    multipleStatements: true,
})

// module.exports = {
//     pool: pool
// }
module.exports = pool;
// const Sequelize = require("sequelize");

// const sequelize = new Sequelize("테이블 이름", "root", "비밀번호", {
//   dialect: "mysql",
//   host: "localhost",
// });

// module.exports = sequelize;