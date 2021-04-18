var express = require('express');
var router = express.Router();

var mainController = require('../controllers/main');

router.get('/getRootUser', mainController.getRootData);
module.exports = router;
