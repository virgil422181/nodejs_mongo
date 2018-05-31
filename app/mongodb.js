let MongoClient = require('mongodb').MongoClient;
let url = 'mongodb://son-all34427-all-dev.scm-sigma.c.emag.network:27017';

exports.getDbContent = (request, response) => {
    MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            db.db("supplier-order-node").collection("request_body").find({}).toArray(function (err, data) {
                if (err) throw err;
                return data; // ??
            });

            db.close();
        }
    );
};