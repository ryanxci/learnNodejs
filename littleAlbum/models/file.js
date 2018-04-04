var fs = require("fs");

exports.getAllAlbums = function (callback) {
    fs.readdir("./uploads", function (err, files) {
        var albums = [];
        if (err) {
            callback("找不到指定文件夹", null);
            return;
        }
        (function iterator(i) {
            if (i == files.length) {
                callback(null, albums);
                return;
            }
            fs.stat("./uploads/" + files[i], function (err, stats) {
                if (err) {
                    callback("找不到指定文件夹", null);
                }
                if (stats.isDirectory()) {
                    albums.push(files[i]);
                }
                iterator(i + 1);
            });
        })(0);
    });
};

exports.getAllImagesByAlbumName = function (albumName, callback) {
    fs.readdir("./uploads/" + albumName, function (err, files) {
        var images = [];
        if (err) {
            callback("找不到该相册", null);
            return
        }
        (function iterator(i) {
            if (i == files.length) {
                callback(null, images);
                return;
            }
            fs.stat("./uploads/" + albumName + "/" + files[i], function (err, stats) {
                if (err) {
                    callback("找不到指定文件", null);
                    return;
                }
                if (stats.isFile()) {
                    images.push(files[i]);
                }
                iterator(i + 1);
            });
        })(0);

    });
};

