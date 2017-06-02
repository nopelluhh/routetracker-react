module.exports = function(passport) {

    passport.serializeUser((user, done) => {
        var sessionUser = { _id: user._id, username: user.username, email: user.email, roles: user.roles }
        done(null, sessionUser)
    })

    passport.deserializeUser((sessionUser, done) => {
        done(null, sessionUser)
    })
}