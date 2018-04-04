var http = require("http");
var url = require("url");

http.createServer(function (req, res) {
    var queryObj = url.parse(req.url, true).query;
    var name = queryObj.name;
    var age = queryObj.age;
    var sex = queryObj.sex;
    var pathname = queryObj.hostname;

    res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"})
    res.end("received:" +pathname+ name + age + sex);
}).listen(3000, "127.0.0.1");