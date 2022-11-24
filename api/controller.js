const request = require("request");
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

exports.save = (req, res) => {
    const nickname = req.body.name;
    const score = req.body.score;
    const level = Number(req.body.level);
    const user = new User(null, nickname, score);
    user
        .save(level)
        .then(() => {
            return res.redirect(`/rank/?nickname=${nickname}&score=${score}&level=${level}`);
        }).catch(err => console.log(err));
}

function insertionSort(arr) {
    const len = arr.length;
    let i, j;
    for (i = 1; i < len; i++) {
        let temp = arr[i].score;
        let tmp = arr[i];
        for (j = i - 1; j > -1 && temp < arr[j].score; j--) {
            // console.log(i, j);
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = tmp;
    }
    return arr;
}

exports.rank = (req, res, next) => {
    const nickname = req.query.nickname;
    const score = Number(req.query.score);
    const level = Number(req.query.level);
    User.fetchAll().then(([rows, fieldData]) => {
        /* Insertion Sort */
        let easyUser = insertionSort(rows[0]);
        let normalUser = insertionSort(rows[1]);
        let hardUser = insertionSort(rows[2]);
        res.render("rank", {
            easyUsers: easyUser,
            normalUsers: normalUser,
            hardUsers: hardUser,
            nickname: nickname,
            score: score,
            level: level
        });
    })
}