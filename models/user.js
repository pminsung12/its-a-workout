/* TODO: 이것도 에러 떠서 일단 주석 ㅠㅠ */

// const Sequelize = require("sequelize");
// const sequelize = require("../util/database");
//
// const User = sequelize.define("user", {
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true,
//     },
//     name: Sequelize.STRING,
//     record: Sequelize.INTEGER,
// });
//
// module.exports = User;
const db = require('../config/database');

module.exports = class User {
    constructor(id, name, record) {
        this.id = id;
        this.name = name;
        this.record = record;
    }
    save() {

    }

    static fetchAll() {
        return db.execute('SELECT * FROM user');
    }
};