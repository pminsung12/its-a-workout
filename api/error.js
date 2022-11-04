exports.get404 = (req, res, next) => {
    //console.log(req.body);
    //status는 404 상태코드 설정
    res.status(404).render("404", { pageTitle: "Page Not Found", path: "/404" });
};

