// 서버 소켓 작업 및 서버 실행
const path = require("path");
const http = require("http");
const bodyParser = require('body-parser');
// const request = require("request");
// const controller = require("./api/controller");
// const dao = require("./api/dao");
const errorController = require("./api/error");
const router = require("./api/router");

// const User = require("./models/user");

// const express = require("./config/express"); //이 파일 코드를 모르겠어서 일단 실행만되도록..
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// app.set("view engine", "ejs"); //express에 스스로를 자동으로 등록
// app.set("views", "views"); //default긴하지만 그래도 적어줌

// app.use((req,res,next)=>{ //미들웨어 등록, 필요한 코드지만 
//     User.findByPk(1) // 아직 코드를 완벽하게 이해 못해서 주석처리함.
//     .then((user) => {
//     req.user = user;
//     next(); // 다음 미들웨어로
//     })
//     .catch((err) => console.log(err));
// });
app.use(router);
app.use(errorController.get404);
/* Socket */

// const server = http.createServer(app);
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));