const route = require('../models/route')

module.exports = routeService

function routeService() {
    return {
        getMany
    }

    function getMany(queryCondition = {}) {
        // let populate = Object.keys(queryCondition).join(' ')
        return route.find(queryCondition) //.populate(populate)
    }
}
