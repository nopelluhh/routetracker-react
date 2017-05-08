const routeService = require('../services/route.service')()

module.exports = routeController

function routeController() {
    return {
        getAll,
        byGym
    }

    function getAll(req, res) {
        routeService.getMany()
            .then(routes => res.json(routes))
            .catch(err => res.json(err))
    }

    function byGym(req, res) {
        let gym = req.query.gym
        let type = req.params.type
        routeService.getMany({gym, type})
            .then(routes => res.json(routes))
            .catch(err => res.json(err))
    }
}
