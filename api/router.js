// 라우팅 작업 : URL 확인
const path = require("path"); //코어 모듈이라 install 필요x
const rootDir = require('../config/path');
const express = require("express");
const index = require("./controller");

module.exports = (app) => {
    const index = require("./controller");

    // 맨 처음 화면
    app.get("/", index.main);

    // 게임 페이지
    app.get("/play/:level", index.play);

    // 게임 점수 저장
    app.post("/play/save", index.save);

    // 랭킹 페이지
    app.get("/rank/{username}", index.rank);
}

/* TODO: 우선 포맷 정리하느라 주석 처리 했는데 같이 보면서 필요한 거 위에다 추가하면 될 거 같아! */

// const gameController = require("./controller");

// const router = express.Router();
//
// // '/' home
// router.get('/', (req, res, next) => {
//     res.sendFile(path.join(rootDir, 'public', 'html', 'intro.html')); // 절대경로를 이 폴더로 고정
// });
//
// router.post('/', (req, res, next) => {
//     // 닉네임 받아오는 요청
//     res.sendFile(path.join(rootDir, 'public', 'html', 'intro.html')); // 절대경로를 이 폴더로 고정
// });
//
// // router.get("/play-game",gameController.getID);
// router.get('/play-game', (req, res, next) => {
//     res.sendFile(path.join(rootDir, 'public', 'html', 'play-game.html')); // 절대경로를 이 폴더로 고정
// });
//
//
// router.post('/play-game', (req, res, next) => {
//     res.sendFile(path.join(rootDir, 'public', 'html', 'play-game.html')); // 절대경로를 이 폴더로 고정
//     //여기서 ejs로 닉네임 받아와야함
// });
//
// // 'play-tutorial'
// router.get('/play-tutorial', (req, res, next) => {
//     res.sendFile(path.join(rootDir, 'public', 'html', 'play-tutorial.html')); // 절대경로를 이 폴더로 고정
// });
//
// router.post('/play-tutorial', (req, res, next) => {
//     res.sendFile(path.join(rootDir, 'public', 'html', 'play-tutorial.html')); // 절대경로를 이 폴더로 고정
// });
//
// // 'play-game'
//
// // 'show-rank'
// router.get('/show-rank', (req, res, next) => {
//     res.sendFile(path.join(rootDir, 'public', 'html', 'show-rank.html')); // 절대경로를 이 폴더로 고정
// });
//
// router.post('/show-rank', (req, res, next) => {
//     res.sendFile(path.join(rootDir, 'public', 'html', 'show-rank.html')); // 절대경로를 이 폴더로 고정
// });
//
// module.exports = router;