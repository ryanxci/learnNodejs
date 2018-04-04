var express = require("express");
var router = require("./controller")
var app = express();

//设置模板
app.set("view engine", "ejs");
//静态页面
app.use(express.static("./public"));
app.use(express.static("./uploads"));
//首页
app.get("/", router.showIndex);
app.get("/:albumName", router.showAlbum);
app.get("/up", router.showUp);
app.post("/upload", router.doPost);

app.use(function (req,res) {
    res.render("err");
});

app.listen(3000);