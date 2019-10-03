let mongoDb = require('../connectors/mongodb');
let ordersRepo = require('../repos/ordersRepo');
let co = require('co');
let formatter = require('../transformer/documentTransformer');

exports.data = (req, res, next) => {
    co(function*(req){
        console.log(req.body.search);
        let dbConnection = yield mongoDb.connect();
        let orders = yield ordersRepo.findAllErrors(dbConnection).toArray();
        console.log(orders);

        res.render('index',{ data: formatter.transform(orders)});
    }).catch(next)
};