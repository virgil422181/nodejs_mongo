let mongoDb = require('../connectors/mongodb');
let ordersRepo = require('../repos/ordersRepo');
let co = require('co');
let formatter = require('../transformer/documentTransformer');

exports.data = (req, res, next) => {
    co(function*(){
        let dbConnection = yield mongoDb.connect();
        let orders = yield ordersRepo.findAll(dbConnection).toArray();

        res.render('index',{ data: formatter.transform(orders)});
    }).catch(next)
};