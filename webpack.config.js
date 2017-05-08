const publicConfig = require(process.env.NODE_ENV==='development'? './webpack.public.dev' : './webpack.public')
console.log(process.env.NODE_ENV)
module.exports = [publicConfig]
