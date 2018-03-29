var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://son-all34427-all-dev.scm-sigma.c.emag.network:27017';

var data = MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("supplier-order-node");
    var result = dbo.collection("request_body").find({}).toArray(function(err, result) {
        if (err) throw err;
        db.close();
        return result;
    });

    return result;
});
console.log(data);
exports.module = MongoClient;