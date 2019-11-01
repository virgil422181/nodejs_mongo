let mongoClient = require('mongodb').MongoClient;
let url = process.env.MONGO_HOST;

let connect = () => mongoClient.connect(url);

module.exports = {
    connect
};