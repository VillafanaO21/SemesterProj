const {User, Role} = require('../models');
const md5 = require('md5');
const passport = require('passport');

module.exports.renderRegistrationForm = async function(req,res){
    const roles = await Role.findAll();
    console.log(roles);
    res.render('users/register', {roles});
}

module.exports.register = async function(req, res){
    await User.create({
        firs_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: md5(req.body.password),
        role_id: req.body.role_id
    })
    res.redirect('/login')
}

module.exports.renderLogin = function(req, res){
    res.render('users/login');
}

module.exports.login = passport.authenticate('local', {
    successRedirect:'/',
    failureRedirect: '/login',
    failureMessage: true
});