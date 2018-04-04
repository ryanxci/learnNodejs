const db = require("./model/db");

// db.insertOne("teacher", {"name": "小红红"}, function (err, result) {
//     if (err) {
//         console.log("插入失败");
//         return;
//     }
//     console.log(result);
// });

// db.updateDocs("teacher", {"name":"小红红"},{"name":"小红花"}, function (err, result) {
//     if (err) {
//         console.log("修改失败");
//         return;
//     }
//     console.log(result);
// });

db.findDocs("teacher", {}, function (err, result) {
    if (err) {
        console.log("查找失败");
        return;
    }
    console.log(result);
});

// db.deleteDocs("teacher", {"name": "小红"}, function (err, result) {
//     if (err) {
//         console.log("删除失败");
//         return;
//     }
//     console.log(result);
// });