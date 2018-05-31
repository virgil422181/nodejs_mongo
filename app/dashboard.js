let mongo = require('mongodb');

let dashboard = {
    data: function (req, res) {
        return mongo.getDbContent(req, res);
    }
};
exports.module = dashboard;