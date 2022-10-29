// 요청 처리 작업
const request = require("request");
const dao = require("./dao");

exports.main = async (req, res) => {
    res.json({result: "이제 html을 리턴해보자"});
    // return res.render("~.ejs", {}); 하면 됨!
}