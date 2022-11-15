// DB query

const { pool } = require("../config/database");

async function getScoreList() {
    const connection = await pool.getConnection(async (conn) => conn);
    const Query = `SELECT * FROM user`;
    const [data] = await connection.query(Query);
    console.log('query 실행결과 >', data);
    return data;
}

module.exports = {
    getScoreList,
}