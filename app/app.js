/**
 * Created by zhudaimi on 7/26/14.
 */

var express = require('express')
    , http = require('http')
    ,flash = require('connect-flash')
    ,passport = require('passport')
    , mongoose = require('mongoose')
    ,env =  'localhost'
    ,config = require('./config/config')[env]
    ,fs = require('fs')


// Bootstrap db connection
// Connect to mongodb
var connect = function () {
    var options = { server: { socketOptions: { keepAlive: 1 } }

    }
    mongoose.connect(config.db , options)
}
connect()

// Error handler
mongoose.connection.on('error', function (err) {
    console.log(err)
})

// Reconnect when closed
mongoose.connection.on('disconnected', function () {
    connect()
})

mongoose.connection.on('close', function () {
    connect()
})



// Bootstrap models
var models_path = __dirname + '/models'
fs.readdirSync(models_path).forEach(function (file) {
    if (~file.indexOf('.js')) require(models_path + '/' + file)
})

// bootstrap passport config
require('./config/passport')(passport)


var app = express()
// express settings
require('./config/express')(app, passport)


// Bootstrap routes
require('./config/routes')(app, passport)



// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/login');
}

http.createServer(app).listen(18080, function(){
    console.log("Express server listening on port 18080" );
});

// expose app
exports = module.exports = app