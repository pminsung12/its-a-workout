// 라우팅 작업
module.exports = (app) => {
    const index = require("./controller");
    app.get("/", index.main);
}