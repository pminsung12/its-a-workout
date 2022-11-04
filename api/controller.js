// 요청 처리 작업
const request = require("request");
const dao = require("./dao");
const User = require("../models/user");

exports.getAddUser = (req, res, next) => {
    res.render("admin/edit-product", {
        pageTitle: "Add User",
        path: "", //path 추가해야함.
        editing: false,
    });
};
exports.postAddUser = (req, res, next) => {
    const name = req.body.name;
};



exports.main = async (req, res) => {
    return res.render("../public/html/intro.ejs", {});
}