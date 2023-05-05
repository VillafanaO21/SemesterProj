var express = require('express');
var router = express.Router();
const menuController = require('../controllers/menuController');
const orderController = require('../controllers/orderController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/menu/add', menuController.renderAddForm);
router.post('/menu/add',menuController.addMenu);

router.get('/menu/:menuId', menuController.displayMenu);
router.get('/menu/:menuId/edit', menuController.renderAddForm);
router.post('/menu/:menuId/edit', menuController.updateMenu)
router.get('/menu/:menuId/delete', menuController.deleteMenu);
router.post('/menu/:menuId/order/create', orderController.createOrder);
router.post('/order/:orderId/reply/create', orderController.addReply);
module.exports = router;