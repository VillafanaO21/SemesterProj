const {Menu, Order, Reply} = require('../models');

module.exports.renderAddForm = function(req, res){
    const menu = {
        title: '',
        intro: '',
        image_url: '',
        body: '',
        chef_id: '',
    };
    res.render('menu/add', {menu});
};
module.exports.addMenu = async function(req, res){
    const menu = await Menu.create({
        title: req.body.title,
        intro: req.body.intro,
        image_url: req.body.image_url,
        body: req.body.body,
        chef_id: req.body.chef_id,
        published_on: new Date()
    });
    res.redirect('/')
};

module.exports.displayMenu = async function(req, res){
    const menu = await Menu.findByPk(req.params.menuId, {
        include: [
            'chef',
            {
                model: Order,
                as: 'order',
                required: false,
                include: [{
                    model: Reply,
                    as: 'replies',
                    required: false
                }]
            }
        ],
        order: [
            ['order', 'ordered_on', 'desc']
        ]
    });
    res.render('menu/view', {menu});
};

module.exports.displayAll = async function(req, res){
    const menus = await Menu.findAll({
        include: ['chef']
    });
    res.render('menu/viewAll', {menu});
}

module.exports.renderEditForm = async function(req, res){
    const menu = await Menu.findByPk(req.params.menuId);
    if (!menu.isOwnedBy(user)){
        res.redirect('/');
        return;
    }
    res.render('menus/edit', {menu});
};

module.exports.renderAddForm = async function(req, res){
    const menu = {
        title: '',
        intro: '',
        image_url: '',
        body: '',
        chef_id: ''
}
    res.render('menu/add', {menu});
}

module.exports.updateMenu = async function(req, res){
    const menu = await Menu.findByPk(req.parans.menuId);
    if (!menu.isOwnedBy(user)){
        res.redirect('/');
        return;
    }
    await Menu.update({
        title: req.body.title,
        intro: req.body.intro,
        image_url: req.body.image_url,
        body: req.body.body,
        chef_id: req.body.chef_id
    }, {
        where: {
            id: req.params.menuId
        }
    });
    res.redirect(`/menu/${req.params.menuId}`)
}

module.exports.deleteMenu = async function(req, res){
    const menu = await Menu.findByPk(req.params.menuId);
    if (!user.is('admin') && !menu.isOwnedBy(user)){
        res.redirect('/');
        return;
    }
    await Menu.destroy({
        where: {
            id: req.params.menuId
        }
    });
    res.redirect('/')
};
