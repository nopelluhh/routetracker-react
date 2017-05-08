const team = require('../models/team')

module.exports = teamService

function teamService() {
    return {
        getMany,
        getOne,
        create
    }

    function getMany(queryCondition = {}) {
        return team.find(queryCondition)
    }

    function getOne(queryCondition = {}) {
        return team.findOne(queryCondition).populate('gyms')
    }

    function create(req) {
        let temp = new team(req.body)
        return temp.save()
    }
}
