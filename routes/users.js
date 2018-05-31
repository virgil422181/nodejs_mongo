let express = require('express');
let router = express.Router();
let dashboard = require('../app/dashboard');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(dashboard.data(req, res));
});

module.exports = router;
