let mongoClient = require('mongodb').MongoClient;
let url = 'mongodb://son-all34427-all-dev.scm-sigma.c.emag.network:27017';

let connect = () => mongoClient.connect(url);

module.exports = {
    connect
};