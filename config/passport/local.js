const LocalStrategy = require('passport-local').Strategy,
    User = require('../../app/models/user'),
    router = require('express').Router()

module.exports = function(passport) {

    passport.serializeUser((user, done) => {
        var sessionUser = {
            _id: user._id,
            username: user.local.username,
            email: user.local.email,
            roles: user.roles,
            gyms: user.gyms
        }
        done(null, sessionUser)
    })

    passport.deserializeUser((sessionUser, done) => {
        done(null, sessionUser)
    })

    passport.use('local-login', new LocalStrategy(
        function(username, password, done) {
            User.findOne({ 'email': username }, {'pw': 1},function(err, user) {
                if (err) { return done(err) }
                if (!user) {
                    return done(null, false, { message: 'Incorrect username.' })
                }
                if (!user.validPassword(password)) {
                    return done(null, false, { message: 'Incorrect password.' })
                }
                return done(null, user)
            })
        }
    ))

    passport.use('local-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, localRegister))

    function localRegister(req, email, password, done) {
        process.nextTick(function() {
            User.findOne({ 'email': email }, function(err, user) {
                if (err) return done(err)
                if (user) {
                    return done(null, user)
                } else {
                    var newUser = new User()
                    newUser.local.email = email
                    newUser.local.pw = newUser.generateHash(password)
                    newUser.save(function(err) {
                        if (err) throw err
                        return done(null, newUser)
                    })
                }

            })

        })

    }

    router.post('/api/login',
        passport.authenticate('local-login', {
            successRedirect: '/gyms',
            //failureRedirect: '/',
        }))

    router.post('/api/register', passport.authenticate('local-signup'), (req, res) => res.send('a-ok!'))

    router.get('/api/logout', (req, res) => res.send('logout!'))


    return router
}
