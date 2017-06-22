const router = require('express').Router()
const notificationController = require('../controllers/notification.controller')()

router.post('/', notificationController.sendEmail) // needs to be updated once user/team access is implemented
module.exports = router