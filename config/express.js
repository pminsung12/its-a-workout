/* express 세팅 */
const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

module.exports = () => {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(methodOverride("_method"));
    app.use(express.static(process.cwd() + "/public"));
    require('../api/router')(app);
    app.set("view engine", "ejs"); // express에 스스로를 자동으로 등록
    app.set("views", "views"); // default긴 하지만 그래도 적어줌
    return app;
}