const {Order, Reply} = require('../models');

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

module.exports.addReply = async function(req, res){
    const parentOrder = await Order.findByPk(req.params.orderId);
    let menuId = parentOrder.menu_id;
    await Reply .create({
        chef_name: req.body.chef_name,
        body: req.body.body,
        ordered_on: new Date,
        menu_id: menuId,
        parent_order_id:parentOrder.id
    });
    res.redirect(`/menu/${menuId}`);
}