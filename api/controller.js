// 요청 처리 작업, 모든 모듈들
const request = require("request");
const dao = require("./dao");
const User = require("../models/user");

exports.main = async (req, res) => {
    return res.render("../public/html/intro.ejs", {});
}

exports.play = async (req, res) => {
    const nickname = req.query.nickname;
    const level = req.params.level;
    console.log('nickname, level >', nickname, level);
    return res.render("../public/html/game.ejs", {nickname, level});
}

exports.save = async (req, res) => {

}

exports.rank = async (req, res) => {

}

exports.test = async (req, res) => {
    return res.render("../public/html/test.ejs", {});
}


/* TODO: 우선 충돌 날까봐 주석 처리 해뒀어 */

// exports.getAddUser = (req, res, next) => {
//     res.render("admin/edit-product", {
//         pageTitle: "Add User",
//         path: "", //path 추가해야함.
//         editing: false,
//     });
// };

// exports.postAddUser = (req, res, next) => {
//     // 유저 추가 메서드
//     const name = req.body.name;
// };
//
// exports.getTutorial = (req, res, next) => {
//     const name = req.body.name;
// };
//
// exports.getPlayGame = (req, res, next) => {
//     const name = req.body.name;
// };
//
// exports.postPlayGame = (req, res, next) => {
//     const name = req.body.name;
// };
//
// exports.getRank = (req, res, next) => {
//     const name = req.body.name;
// };
//
// exports.postRank = (req, res, next) => {
//     const name = req.body.name;
// };