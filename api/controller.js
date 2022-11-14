const request = require("request");
const dao = require("./dao");
const User = require("../models/user");

exports.main = async (req, res) => {
    return res.render("intro", {});
}

exports.tutorial = async (req, res) => {
    return res.render("tutorial", {});
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
    User.fetchAll()
        .then(([rows, fieldData]) => {
            res.render("rank", {
                pageTitle: "Ranking System",
                users: rows,
            });
        })
        .catch(err => console.log(err));
    return;
}

exports.test = async (req, res) => {
    return res.render("test", { pageTitle: "Tutorial" });
}
