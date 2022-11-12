// 서버 소켓 작업 및 서버 실행
const path = require("path");
const http = require("http");

const db = require('./config/database');
// const request = require("request");
// const controller = require("./api/controller");
// const dao = require("./api/dao");
// const errorController = require("./api/error");
// const router = require("./api/router");

// const sequelize = require("./config/database");
// const User = require("./models/user");

const express = require("./config/express");
const app = express();

db.execute('SELECT * FROM user')
    .then(result => {
        console.log(result[0], result[1]);
    })
    .catch(err => {
        console.log(err);
    });

// sequelize
//     // .sync({ force: true }) //강제로 덮어쓰도록
//     .sync()
//     .then((result) => {
//         return User.findByPk(1); //유저가 있다면
//         //console.log(result);
//     })
//     .then((user) => {
//         if (!user) {
//             return User.create({ name: "Max", email: "test@test.com" });
//         }
//         return user; //즉시 사용자를 확인하는 promise
//     })
//     .then((user) => {
//         // console.log(user);
//         return user.createCart();
//     })
//     .then((cart) => {
//         app.listen(3000); // 서버 수신
//     })
//     .catch((err) => {
//         console.log(err);
//     }); //

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));