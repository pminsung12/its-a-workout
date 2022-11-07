// 요청 처리 작업, 모든 모듈들
const request = require("request");
const dao = require("./dao");
const User = require("../models/user");

exports.main = async (req, res) => {
    return res.render("intro", {});
}

exports.play = async (req, res) => {
    const nickname = req.query.nickname;
    const level = req.params.level;
    console.log('nickname, level >', nickname, level);
    return res.render("game", { nickname, level });
}

exports.save = async (req, res) => {

}

exports.rank = async (req, res) => {
    return res.render("rank", { pageTitle: "Ranking System" });
}

exports.test = async (req, res) => {
    return res.render("test", { pageTitle: "Tutorial" });
}
