const publicConfig = require(process.env.NODE_ENV==='development'? './webpack.public.dev' : './webpack.public')
const loginConfig = require('./webpack.login')
console.log(process.env.NODE_ENV)
module.exports = [publicConfig, loginConfig]
