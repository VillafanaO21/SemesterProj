var express = require('express');
var router = express.Router();
const menuController = require('../controllers/menuController');
const orderController = require('../controllers/orderController');
const userController = require('../controllers/userController');
const ensureUserAuthenticated = require('../middleware/ensureUserAuthenticated.js');
const userHasRole = require('../middleware/userHasRole');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/menu/add', ensureUserAuthenticated, userHasRole('chef'), menuController.renderAddForm);
router.post('/menu/add', ensureUserAuthenticated, userHasRole('chef'), menuController.addMenu);

router.get('/menu/:menuId', menuController.displayMenu);
router.get('/menu/:menuId/edit', ensureUserAuthenticated, userHasRole('chef'),  menuController.renderAddForm);
router.post('/menu/:menuId/edit', ensureUserAuthenticated, userHasRole('chef'),  menuController.updateMenu)
router.get('/menu/:menuId/delete', ensureUserAuthenticated,  menuController.deleteMenu);

router.post('/menu/:menuId/order/create', orderController.createOrder);
router.post('/order/:orderId/reply/create', orderController.addReply);
router.get('/register', userController.renderRegistrationForm);
router.post('/register', userController.register);
router.post('/register', userController.register);

router.get('/login', userController.renderLogin);
router.post('/login', userController.login);
router.post('/login', userController.login);
router.get('/logout', userController.logout);

router.get('/order/:orderId/delete', ensureUserAuthenticated, userHasRole('admin'), orderController.deleteOrder);
router.get('/order/:orderId/reply/:replyId/delete', ensureUserAuthenticated, userHasRole('admin'), orderController.deleteReply);

module.exports = router;