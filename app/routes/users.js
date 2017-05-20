const router = require('express').Router()
const generalController = require('../controllers/general.controller')()
const userController = require('../controllers/user.controller')()

router.get('/current', userController.getCurrent)
router.use('/', generalController.middleware('user'))

module.exports = router