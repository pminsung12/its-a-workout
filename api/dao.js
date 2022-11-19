// DB query

const { pool } = require("../config/database");

async function getScoreList() {
    const connection = await pool.getConnection(async (conn) => conn);
    const Query = `SELECT * FROM easy`;
    const [data] = await connection.query(Query);
    return data;
}

async function saveScore(nickname, score, level) {
    const connection = await pool.getConnection(async (conn) => conn);
    // Hard 10, Normal 8, Easy 7
    if (level === 10) {
        const Query = `INSERT INTO hard(userName, score, date) VALUES('${nickname}', ${score}, CURDATE());`;
        const [data] = await connection.query(Query);
    }
    else if (level === 8) {
        const Query = `INSERT INTO normal(userName, score, date) VALUES('${nickname}', ${score}, CURDATE());`;
        const [data] = await connection.query(Query);
    }
    else if (level === 7) {
        const Query = `INSERT INTO easy(userName, score, date) VALUES('${nickname}', ${score}, CURDATE());`;
        const [data] = await connection.query(Query);
    }
}



module.exports = {
    getScoreList,
    saveScore,
}