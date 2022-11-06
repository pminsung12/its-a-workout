/* express 세팅 */
const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const errorController = require("../api/error");

module.exports = () => {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(methodOverride("_method"));
    app.use(express.static(process.cwd() + "/public"));
    app.set("view engine", "ejs"); // express에 스스로를 자동으로 등록
    app.set("views", "./public/html"); // ejs 가리킬 주소
    require('../api/router')(app);
    // app.use(errorController.get404);
    return app;
}