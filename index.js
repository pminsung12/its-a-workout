// 서버 소켓 작업 및 서버 실행
const path = require("path");
const http = require("http");
const socketio = require("socket.io");
const request = require("request");
const controller = require("./api/controller");
const dao = require("./api/dao");
const router = require("./api/router");
const express = require("./config/express");
const app = express();
const server = http.createServer(app);
const io = socketio(server);

/* Socket */

