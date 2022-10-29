/* express 세팅 */
const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

module.exports = () => {
    const app = express();
    //app.use(compression());
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extneded: true}));
    app.use(methodOverride("_method"));
    app.use(express.static(process.cwd() + "/public"));
    require('../api/router')(app);
    return app;
}