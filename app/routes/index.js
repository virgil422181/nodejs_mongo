let express = require('express');
let router = express.Router();
let dashboard = require('../controllers/dashboard');

/* Dashboard. */
router.route('').
    get((req, res, next) => dashboard.data(req, res, next));

router.route('/').
    post((req, res, next) => dashboard.data(req, res, next));

module.exports = router;
