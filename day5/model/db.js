const MongoClient = require("mongodb").MongoClient;
const settings = require('../settings');

const dbName = 'haha';

//下划线代表内部函数
function _connectDB(callback) {
    MongoClient.connect(settings.dbUrl, function (err, client) {
        callback(err, client);
    });
}

exports.insertOne = function (collectionName, data, callback) {
    _connectDB(function (err, client) {
        const db = client.db(dbName);
        if (err) {
            console.log("connect db failed")
            return;
        }
        db.collection(collectionName).insertOne(data, function (err, result) {
            callback(err, result);
            client.close();
        });
    });
};

exports.findDocs = function (collectionName, filter, C, D) {

    let args = C;
    let callback = D;

    if (arguments.length == 3) {
        callback = C;
        args = {"pageSize": 0, "page": 0};
    }

    _connectDB(function (err, client) {
        const db = client.db(dbName);
        if (err) {
            console.log("connect db failed")
            return;
        }

        const skip = args.pageSize * (args.page - 1);
        const limit = args.pageSize;

        const cursor = db.collection(collectionName).find(filter).skip(skip).limit(limit);
        cursor.toArray(function (err, docs) {
            callback(err, docs);
            client.close();
        });

    });

};

exports.deleteDocs = function (collectionName, filter, callback) {

    _connectDB(function (err, client) {
        const db = client.db(dbName);
        if (err) {
            console.log("connect db failed")
            return;
        }

        const collection = db.collection(collectionName);

        collection.deleteMany(filter, function (err, result) {
            callback(err, result);
            client.close();
        });

    });
};


exports.updateDocs = function (collectionName, filter, data, callback) {

    _connectDB(function (err, client) {
        const db = client.db(dbName);
        if (err) {
            console.log("connect db failed")
            return;
        }

        const collection = db.collection(collectionName);
        collection.updateMany(filter, {$set: data}, function (err, result) {
            callback(err, result);
            client.close();
        });

    });
};