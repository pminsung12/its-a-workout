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
    app.get("/rank", index.rank);

    // 미로 테스트용
    app.get("/test", index.test);
}
