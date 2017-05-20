const userService = require('../services/user.service')()
const user = require('../models/user')

module.exports = boulderController

function boulderController() {
    return {
        getCurrent
    }

    function getCurrent(req, res) {
        userService.getCurrent(req)
            .then(user => res.json(user))
            .catch(err => res.json(err))
    }
}
