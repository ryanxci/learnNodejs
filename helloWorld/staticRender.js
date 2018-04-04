var http = require("http");
var fs = require("fs");
var server = http.createServer(function (req, res) {

    if (req.url == "/fang") {
        fs.readFile("./test.html", function (err, data) {
            res.writeHead(200, {"Content-type": "text/html;charset=UTF-8"});
            res.end(data);
        });
    }else if (req.url == "/fang") {
        fs.readFile("./test.html", function (err, data) {
            res.writeHead(200, {"Content-type": "text/html;charset=UTF-8"});
            res.end(data);
        });
    }else {
        fs.readFile("./test.html", function (err, data) {
            res.writeHead(200, {"Content-type": "text/html;charset=UTF-8"});
            res.end(data);
        });
    }

});

server.listen(3000, "127.0.0.1");