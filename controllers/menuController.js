const {Menu} = require('../models');

module.exports.renderAddForm = function(req, res){
    const menu = {
        title: '',
        intro: '',
        image_url: '',
        body: ''
    };
    res.render('menus/add', {menu});
};