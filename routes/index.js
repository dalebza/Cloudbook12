var express = require('express');
var router = express.Router();
<<<<<<< HEAD
=======
var ConvertApi = require('convertapi-js');
>>>>>>> 60a510b94a8da1c3b51133d08481f1cedd1ac895

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
