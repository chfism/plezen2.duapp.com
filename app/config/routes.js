/**
 * Created by user on 8/8/14.
 */
var impress = require('./../controllers/impress')
    , users = require('./../controllers/users')
    , image = require('./../controllers/image')
    , auth = require('./middlewares/authorization')

/**
 * Expose routes
 */

module.exports = function (app, passport) {

    app.get('/', impress.home);
    app.get('/home', impress.home);

    app.get('/impress', auth.requiresLogin, impress.impress);
    app.post('/impress/new', auth.requiresLogin, impress.new);
    app.get('/mindmap', auth.requiresLogin, impress.mindmap);

    app.get('/login', users.login);
    app.get('/logout', users.logout);
    app.post('/users', users.create);

    app.post('/users/session',
        passport.authenticate('local', {
            failureRedirect: '/login',
            failureFlash: 'Invalid email or password. Please try again!'
        }), users.session)

    app.get('/pricing', users.pricing);
    app.get('/signup/free', users.sign_free);
    app.get('/signup/basic', users.sign_basic);
    app.get('/signup/advanced', users.sign_advanced);

    app.get('/about', impress.about);
    app.get('/terms', impress.terms);
    app.get('/privacy', impress.privacy);
    app.get('/profile/reset', auth.requiresLogin, impress.reset);
    app.get('/your', auth.requiresLogin, impress.your);
    app.get('/settings', auth.requiresLogin, impress.settings);
    app.post('/impress/create', auth.requiresLogin, impress.create);
    app.post('/impress/update', auth.requiresLogin, impress.update);
    //临时页面under construction
    app.get('/temp/home', impress.temp);
    //用这个链接打开自己的ppt http://localhost:18080/impress/54420cb4cf817273051575df
    app.get('/impress/import/:id', auth.requiresLogin, impress.import);
    //用这个链接将自己的ppt分享出来 http://localhost:18080/share/54420cb4cf817273051575df
    app.get('/share/:id', impress.share);
    app.post('/share/:id', auth.requiresLogin, impress.sharewithcode);
    app.post('/impress/delete', auth.requiresLogin, impress.delete);
    app.post('/users/changename', auth.requiresLogin, users.changename);
    app.post('/users/changeprofile', auth.requiresLogin, users.changeprofile);
    app.post('/users/changepwd', auth.requiresLogin, users.changepwd);
    app.get('/impress/tpl/:id', auth.requiresLogin, impress.tpl);
    app.post('/image/upload', auth.requiresLogin, image.upload);
    app.post('/impress/convert', auth.requiresLogin, impress.convert);
    app.get('/impress/import', auth.requiresLogin, impress.import);
    app.post('/impress/token', auth.requiresLogin, impress.token);

}