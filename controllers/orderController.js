const {Order} = require('../models');

module.exports.createOrder = async function(req, res){
    let menuId = req.params.menuId;
    await Order.create({
        chef_name: req.body.chef_name,
        body: req.body.body,
        order_on: new Date,
        menu_id: menuId
    });
    res.redirect(`/menu/${menuId}`);
}