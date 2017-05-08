const gymService = require('../services/gym.service')()

module.exports = gymController

function gymController() {
    return {
        getAll,
        getByTeam,
        getNamed,
        create
    }

    function getAll(req, res) {
        gymService.getMany()
            .then(gyms => res.json(gyms))
            .catch(err => res.json(err))
    }

    function getByTeam(req, res) {
        const queryCondition = { teams: req.params.id }
        gymService.getMany(queryCondition)
            .then(gyms => res.json(gyms))
            .catch(err => res.json(err))
    }

    function getNamed(req, res) {
        const queryCondition = {
            url: req.params.url
        }
        gymService.getOne(queryCondition)
            .then(gym => res.json(gym))
            .catch(err => res.json(err))
    }

    function create(req, res) {
        gymService.create(req)
            .then(gym => res.json(gym))
            .catch(err => res.json(err))
    }
}
