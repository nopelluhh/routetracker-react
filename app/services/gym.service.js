const gym = require('../models/gym')

module.exports = gymService

function gymService() {
    return {
        getMany,
        getOne,
        create
    }

    function getMany(queryCondition = {}, populate = '') {
        return gym.find(queryCondition).populate(populate)
    }

    function getOne(queryCondition = {}) {
        return gym.findOne(queryCondition)
    }

    function create(req) {
        let temp = new gym(req.body)
        return temp.save()
    }
}
