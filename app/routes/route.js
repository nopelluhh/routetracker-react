const router = require('express').Router()
const routeController = require('../controllers/route.controller')()
const generalController = require('../controllers/general.controller')()

router.get('/', generalController.getAll('route'))
router.get('/gym/:id', routeController.byGym)
router.post('/', generalController.create('route'))
router.put('/:id', generalController.update('route'))

module.exports = router
