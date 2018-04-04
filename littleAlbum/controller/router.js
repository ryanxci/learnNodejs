var file = require("../models/file");
var formidable = require("formidable");
var path = require("path");
var fs = require("fs");
var sd = require("silly-datetime");

exports.showIndex = function (req, res, next) {
    file.getAllAlbums(function (err, albums) {
        if (err) {
            next();
            return;
        }
        res.render("index", {
            "albums": albums
        });
    });

};

exports.showAlbum = function (req, res, next) {
    var albumName = req.params.albumName;

    file.getAllImagesByAlbumName(albumName, function (err, images) {
        if (err) {
            next();
            return;
        }
        res.render("album", {
            "albumName": albumName,
            "images": images
        });
    });


};

exports.showUp = function (req, res,next) {
    file.getAllAlbums(function (err, albums) {
        if (err) {
            next();
            return;
        }
        res.render("up", {
            "albums": albums
        });
    });
};


exports.doPost = function (req, res, next) {
    var form = new formidable.IncomingForm();

    form.uploadDir = path.normalize(__dirname+"/../tempup/");

    form.parse(req, function (err, fields, files) {
        if (err) {
            next();
            return;
        }

        console.log(fields);
        console.log(files);
        var size = parseInt(files.tupian.size);
        if (size > 1000000) {
            fs.unlink(files.tupian.path);
            res.send("图片尺寸应该小于5M");
            return;
        }

        var ttt = sd.format(new Date(), "YYYYMMDDHHmmss");
        var ran = parseInt(Math.random() * 89999 + 10000);
        var extName = path.extname(files.tupian.name);

        var wenjianjia = fields.wenjianjia;
        var oldPath = files.tupian.path;
        var newPath = path.normalize(__dirname + "/../uploads/" + wenjianjia + "/" + ttt + ran + extName);
        fs.rename(oldPath, newPath, function (err) {
            if (err) {
                res.send("改名失败");
                return;
            }
            res.send("上传成功");
        });
    });

};