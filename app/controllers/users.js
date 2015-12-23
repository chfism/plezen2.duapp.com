/**
 * Created by user on 8/6/14.
 */

var mongoose = require('mongoose')
    ,utils = require('./../lib/util')
    ,User = mongoose.model('User')

/**
 * Show sign up form
 */

exports.signup = function (req, res) {
    res.render('users/signup', {
        errors: null,
        title: 'Sign up',
        user: new User()
    })
}


/**
 * Create user
 */

exports.create = function (req, res) {
var user = new User();

    user.username = req.body.username;
    user.password = req.body.password;
    user.email = req.body.email;
    user.usertype = req.body.usertype;
    user.profile = "I'm too lazy to introduce myself";
    user.inserted = new Date();

    user.save(function (err) {
        if (err) {
            return res.render('views/signup/free', {
                errors: utils.errors(err.errors),
                user: user,
                title: 'Sign up'
            })
        }

        // manually login the user once successfully signed up
        req.logIn(user, function(err) {
            if (err) return next(err)
            return res.redirect('/your')
        })
    })

}

exports.login = function(req, res, next) {

    res.render('views/login', { user: req.user, message: req.flash('error') });
};

exports.logout = function(req, res){
    req.logout();
    res.redirect('/');
};

exports.pricing = function(req,res){

    res.render('views/pricing',{user:req.user})
}

exports.sign_free = function(req,res){

    res.render('views/signup/free',{
        errors: [],
        user:req.user
    })
}

exports.sign_basic = function(req,res){

    res.render('views/signup/basic',{user:req.user})
}

exports.sign_advanced = function(req,res){

    res.render('views/signup/advanced',{user:req.user})
}

var login = function (req, res) {
    var redirectTo = req.session.returnTo ? req.session.returnTo : '/your'
    delete req.session.returnTo
    res.redirect(redirectTo)
}

exports.changename = function (req, res) {
    var conditions = {email : req.body.email};
    var update     = {$set : {username: req.body.username}};
    var options    = {};

    User.update(conditions, update, options, function(err,doc){
        if(err) {
            console.log(err);
            res.send('false');
        }
        else {
            res.send('true');
        }
    });
}

exports.changeprofile = function (req, res) {
    var conditions = {email : req.body.email};
    var update     = {$set : {profile: req.body.profile}};
    var options    = {};

    User.update(conditions, update, options, function(err,doc){
        if(err) {
            console.log(err);
            res.send('false');
        }
        else {
            res.send('true');
        }
    });
}

exports.changepwd = function (req, res) {
    var conditions = {email : req.body.email};
    var update     = {$set : {password: req.body.pwd}};
    var options    = {};
    User.update(conditions, update, options, function(err,doc){
        if(err) {
            console.log(err);
            res.send('false');
        }
        else {
            res.send('true');
        }
    });
}

/**
 * Session
 */

exports.session = login