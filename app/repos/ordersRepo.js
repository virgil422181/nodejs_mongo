let dbName = 'supplier-order-node';
let documentsCollection = 'request_body';
let errorsCollection = 'errors';

let findAll = (connection) => connection.db(dbName).collection(documentsCollection).find({});
let findAllErrors = (connection) => connection.db(dbName).collection(errorsCollection).find({});
let findErrorsById = (connection) => connection.db(dbName).collection(errorsCollection).find({});

module.exports = {
    findAll,
    findAllErrors
};