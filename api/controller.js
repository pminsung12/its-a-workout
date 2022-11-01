// 요청 처리 작업
const request = require("request");
const dao = require("./dao");

exports.main = async (req, res) => {
    return res.render("../public/html/intro.ejs", {});
}