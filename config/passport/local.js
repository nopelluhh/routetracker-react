const LocalStrategy = require('passport-local').Strategy,
    User = require('../../app/models/user'),
    router = require('express').Router()

module.exports = function(passport) {

    passport.serializeUser((user, done) => {
        var sessionUser = {
            _id: user._id,
            email: user.email,
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
            User.findOne({ 'email': username },function(err, user) {
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
        passwordField: 'pw',
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
                    newUser.email = email
                    newUser.pw = newUser.generateHash(password)
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
            successRedirect: '/',
            //failureRedirect: '/',
        }))

    router.get('/api/users/all', (req, res) => User.find({}).then(users => res.json(users)))

    router.post('/api/register', passport.authenticate('local-signup'), (req, res) => res.send('a-ok!'))

    router.get('/logout', (req, res) => {req.logOut(); res.redirect('/')})

    return router
}
