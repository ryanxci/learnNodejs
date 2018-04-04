const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://admin:zxcvbnm@118.24.68.134:27097/?authSource=admin';

const dbName = 'haha';

MongoClient.connect(url, function (err, client) {
    if (err) {
        console.log("connected failed");
        return;
    }
    console.log("connected currently to server");

    const db = client.db(dbName);
    // findDocs(db, function (docs) {
    //     console.log("Fond th following records");
    //     console.log(docs);
    //     client.close();
    // });
    insertDocuments(db, function (result) {
        console.log(result);
        client.close();
    });
});

const insertDocuments = function (db, callback) {
    const collection = db.collection('doc');

    collection.insertOne({
        "name":"xiaoming",
        "age":parseInt(Math.random()*100+10)
    }, function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Inserted a doc into the collection");
        callback(result);
    });
};

const findDocs = function (db, callback) {
    const collection = db.collection('doc');
    collection.find({}).toArray(function (err,docs) {
        if (err) {
            console.log(err);
            return;
        }

        callback(docs);
    })
};