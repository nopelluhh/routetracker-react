require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const session = require('express-session')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const port = process.env.PORT || 8080
const path = require('path')
const routes = require('./app/routes')
const mongoStore = require('connect-mongo')(session)
const passportConfig = require('./config/passport/local')
const morgan = require('morgan')

mongoose.promise = Promise

app.use(require('./static'))

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(morgan(':method :url :status :response-time ms - :res[content-length]'))

app.use(session({
    secret: process.env.PASSPORT_SESSION_SECRET || 'abc1234', // session secret
    store: new mongoStore({
        mongooseConnection: mongoose.connection,
        //ttl: 14 * 24 * 60 * 60
    }),
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())


app.use(passportConfig(passport))
app.get('/', (req, res, next) => {
    console.log(req.user)
    if(!req.user) res.sendFile(path.resolve(__dirname, './login/login.html'))
})
app.use(routes)
mongoose.connect(process.env.MONGO_DB_URL)
app.set('domain', process.env.HOST || 'localhost')

app.listen(port, () => console.log(`listening on ${process.env.HOST}:${port}`))
