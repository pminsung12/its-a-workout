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
    return res.render("game", { nickname, level });
}

// exports.save = async (req, res) => {
//     const nickname = req.body.name;
//     const score = req.body.score;
//     const level = Number(req.body.level);
//     // Save in DB
//     const saveScore = await dao.saveScore(nickname, score, level);
//     console.log("save completed");
//     return res.render("rank", {});
// }

exports.save = (req, res, next) => {
    const nickname = req.body.name;
    const score = req.body.score;
    const level = Number(req.body.level);
    const user = new User(null, nickname, score);
    user
        .save(level)
        .then(() => {
            res.redirect('/rank');
        }).catch(err => console.log(err));

}

// exports.rank = async (req, res) => {
//     const scoreList = await dao.getScoreList();
//     console.log(scoreList);
//     return res.render("rank", {
//         pageTitle: "Ranking System",
//         users: scoreList
//     });
// }

exports.rank = (req, res, next) => {
    User.fetchAll().then(([rows, fieldData]) => {
        res.render("rank", {
            pageTitle: "Ranking System",
            users: rows,
            path: '/rank'
        });
    })
}

exports.test = async (req, res) => {
    return res.render("test", { pageTitle: "Tutorial" });
}
