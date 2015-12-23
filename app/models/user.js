/**
 * Created by user on 8/1/14.
 */
var mongoose = require('mongoose')
   , Schema = mongoose.Schema
   , crypto = require('crypto');

var UserSchema = new Schema({
    username: { type: String, required: false, unique: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true},
    usertype: { type: Number, required: true},
    profile: { type: String, required: true},
    inserted: {type: Date, required: true}
});




/**
 * Validations
 */

var validatePresenceOf = function (value) {
    return value && value.length
}

// the below 5 validations only apply if you are signing up traditionally

UserSchema.path('email').validate(function (email, fn) {
    var User = mongoose.model('User')
    if (this.doesNotRequireValidation()) fn(true)

    // Check only when it is a new user or when email field is modified
    if (this.isNew || this.isModified('email')) {
        User.find({ email: email }).exec(function (err, users) {
            fn(!err && users.length === 0)
        })
    } else fn(true)
}, 'Email already exists')

UserSchema.path('username').validate(function (username) {
    if (this.doesNotRequireValidation()) return true
    return username.length
}, 'Username cannot be blank')

UserSchema.path('password').validate(function (hashed_password) {
    if (this.doesNotRequireValidation()) return true
    return hashed_password.length
}, 'Password cannot be blank')

/**
 * Pre-save hook
 */

UserSchema.pre('save', function(next) {
    if (!this.isNew) return next()

    if (!validatePresenceOf(this.password)
        && !this.doesNotRequireValidation())
        next(new Error('Invalid password'))
    else
        next()
})

/**
 * Methods
 */

UserSchema.methods = {

    /**
     * Authenticate - check if the passwords are the same
     *
     * @param {String} plainText
     * @return {Boolean}
     * @api public
     */
    findByEmail: function(cb){
        return this.model('User').find({email:this.email},cb);

    },
    authenticate: function (plainText) {
        return plainText === this.password
    },

    emailduplicate: function (cb){
        if(this.model('User').find({email:this.email},cb).length>0)
        {
           return true;
        }
        return false;
    },

    /**
     * Make salt
     *
     * @return {String}
     * @api public
     */

    makeSalt: function () {
        return Math.round((new Date().valueOf() * Math.random())) + ''
    },

    /**
     * Encrypt password
     *
     * @param {String} password
     * @return {String}
     * @api public
     */

    encryptPassword: function (password) {
        if (!password) return ''
        var encrypred
        try {
            encrypred = crypto.createHmac('sha1', this.salt).update(password).digest('hex')
            return encrypred
        } catch (err) {
            return ''
        }
    },

    /**
     * Validation is not required if using OAuth
     */

    doesNotRequireValidation: function() {
        return false;
    }
}

mongoose.model('User', UserSchema);

