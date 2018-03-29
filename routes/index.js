var express = require('express');
var router = express.Router();
var mongo = require('../app/mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { data: mongo.data });
});

module.exports = router;
