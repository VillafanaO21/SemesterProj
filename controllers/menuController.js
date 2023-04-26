const {Menu} = require('../models');
module.exports.renderAddForm = function(req, res){
    const menu = {
        title: '',
        intro: '',
        image_url: '',
        body: '',
        chef_id: '',
        published_on: ''
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
        published_on: req.body.published_on,
    })
    res.redirect('/') //todo change the redirect to view all once made
};

module.exports.displayMenu = async function(req, res){
    const menu = await Menu.findByPk(req.params.menuId, {
        include: ['chef']
    });
    res.render('menu/view', {menu});
};