const generalService = require('../services/general.service')()
const team = require('../models/team')

module.exports = boulderController

function boulderController() {
    return {
        current
    }

    function current(req, res) {
        let id =  '58de9650cc711738fe322fc1' || req.user._id
        generalService.getOne(team, {_id: id}, 'gyms members')
            .then(team => res.json(team))
            .catch(err => res.json(err))
    }
}
