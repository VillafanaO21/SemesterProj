const {Menu} = require('../models');
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
    })
    res.redirect('/') //todo change the redirect to view all once made
};

module.exports.displayMenu = async function(req, res){
    const menu = await Menu.findByPk(req.params.menuId, {
        include: ['chef']
    });
    res.render('menu/view', {menu});
};

module.exports.displayAll = async function(req, res){
    const menus = await Menu.findAll({
        include: ['chef']
    });
    res.render('menu/viewAll', {menu});
}

module.exports.renderAddForm = async function(req, res){
    const menu = await Menu.findByPk(req.params.menuId);
    res.render('menu/edit', {menu});
}

module.exports.updateMenu = async function(req, res){
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
    await Menu.destroy({
        where: {
            id: req.params.menuId
        }
    });
    res.redirect('/')
};
