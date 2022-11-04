// 라우팅 작업 : URL 확인
const path = require("path"); //코어 모듈이라 install 필요x
const express = require("express");

// const gameController = require("./controller");

const router = express.Router();


// module.exports = (app) => {
//     const index = require("./controller");
//     app.get("/", index.main);
// }

// '/' home
router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'html', 'intro.html')); // 절대경로를 이 폴더로 고정
});

router.post('/', (req, res, next) => {
    // 닉네임 받아오는 요청
    res.sendFile(path.join(__dirname, '..', 'public', 'html', 'intro.html')); // 절대경로를 이 폴더로 고정
});

// router.get("/play-game",gameController.getID);
router.get('/play-game', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'html', 'play-game.html')); // 절대경로를 이 폴더로 고정
});

// 'play-tutorial'
router.get('/play-tutorial', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'html', 'play-tutorial.html')); // 절대경로를 이 폴더로 고정
});

// 'play-game'

// 'show-rank'
router.get('/show-rank', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'html', 'show-rank.html')); // 절대경로를 이 폴더로 고정
});

module.exports = router;