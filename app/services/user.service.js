const user = require('../models/user')

module.exports = userService

function userService() {
    return {
        getCurrent
    }

    function getCurrent(req) {
        const queryCondition = {
            _id: req.user? req.user._id : (process.env.NODE_ENV === 'development'? '590a5b0853cee977f172b207' : null)
        }
        return user.findOne(queryCondition)
    }
}
 