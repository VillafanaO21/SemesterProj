module.exports = function(role){
    return function(req, res, next){
        if (!req.user.has(role)){
            res.redirect('/');
            return;
        }
        next();
    }
}