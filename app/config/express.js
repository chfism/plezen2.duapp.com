/**
 * Created by user on 8/7/14.
 */
var express = require('express')
    , flash = require('connect-flash')
    , pkg = require('../../package.json')

var env = process.env.NODE_ENV || 'development'

module.exports = function (app, passport) {

    app.engine('html', require('ejs').renderFile);
    app.set('showStackError', true)

    // should be placed before express.static
    app.use(express.compress({
        filter: function (req, res) {
            return /json|text|javascript|css/.test(res.getHeader('Content-Type'))
        },
        level: 9
    }))


    app.configure(function () {
        // expose package.json to views
        app.use(function (req, res, next) {
            res.locals.pkg = pkg
            next()
        })

        app.set('view engine', 'ejs');
        app.set('views', __dirname + '/..');
        console.log(__dirname);

        app.use(express.logger('dev'));
        //app.use(express.bodyParser());
        app.use(express.json());
        app.use(express.urlencoded());
        app.use(express.methodOverride());

        app.use(express.cookieParser());

        app.use(express.session({ secret: 'keyboard cat' }));
        // Initialize Passport!  Also use passport.session() middleware, to support
        // persistent login sessions (recommended).
        app.use(flash());
        app.use(passport.initialize());
        app.use(passport.session());

        app.use(app.router);
        app.use(express.static(__dirname + "/.."));


        // assume "not found" in the error msgs
        // is a 404. this is somewhat silly, but
        // valid, you can do whatever you like, set
        // properties, use instanceof etc.
        app.use(function (err, req, res, next) {
            // treat as 404
            if (err.message
                && (~err.message.indexOf('not found')
                    || (~err.message.indexOf('Cast to ObjectId failed')))) {
                return next()
            }

            // log it
            // send emails if you want
            console.error(err.stack)

            // error page
            res.status(500).render('500', { error: err.stack })
        })

        // assume 404 since no middleware responded
        app.use(function (req, res, next) {
            res.status(404).render('404', {
                url: req.originalUrl,
                error: 'Not found'
            })
        })
    })

}