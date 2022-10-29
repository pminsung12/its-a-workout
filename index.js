// 서버 소켓 작업 및 서버 실행
const path = require("path");
const http = require("http");
const request = require("request");
const controller = require("./api/controller");
const dao = require("./api/dao");
const router = require("./api/router");
const express = require("./config/express");
const app = express();
const server = http.createServer(app);

/* Socket */

const PORT = 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));