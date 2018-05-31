let express = require('express');
let router = express.Router();
let dashboard = require('../app/dashboard');


/* GET home page. */
router.get('/', function (req, res, next) {
    dashboard.data(req, res, next);
});

module.exports = router;
