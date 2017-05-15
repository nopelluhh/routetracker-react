const router = require('express').Router()
const generalController = require('../controllers/general.controller')()

router.use('/', generalController.middleware('user'))

module.exports = router