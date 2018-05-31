let MongoClient = require('mongodb').MongoClient;
let url = 'mongodb://son-all34427-all-dev.scm-sigma.c.emag.network:27017';
let connect = MongoClient.connect(url);

exports.data = (req, res, next) => {

    connect.then((db) => {
        return db.db("supplier-order-node").collection("request_body").find({}).toArray();
    }).then((data)=>{
        res.json(data);
    }).catch(next);
};