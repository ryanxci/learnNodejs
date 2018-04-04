var http = require("http");
var url = require("url");

http.createServer(function (req, res) {
    var userurl = req.url;

    res.writeHead(200, {"Content-Type": "text/html;charset=utf8"});

    if (userurl.substr(0, 9) == "/student/") {
        var studentId = userurl.substr(9);
        if (/^\d{10}$/.test(studentId)) {
            res.end("Student id:"+studentId);
        }else{
            res.end("Student id is wrong!")
        }
    }else if (userurl.substr(0, 9) == "/teacher/") {
        var teacherId = userurl.substr(9);
        if (/^\d{6}$/.test(teacherId)) {
            res.end("Teacher id is:" + teacherId);
        }else {
            res.end("Teacher id is wrong!")
        }
    }


}).listen(3000,"127.0.0.1");