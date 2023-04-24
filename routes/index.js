var express = require('express');
var router = express.Router();
const menuController = require('../controllers/menuController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/menu/add', menuController.renderAddForm);
module.exports = router;