const router = require('express').Router()
const gymController = require('../controllers/gym.controller')()

router.get('/url/:url', gymController.getNamed)
router.get('/team/:id', gymController.getByTeam)

router.get('/', gymController.getAll)
router.post('/', gymController.create)

module.exports = router
