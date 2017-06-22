const notificationService = require('../services/notification.service')

module.exports = notificationController

function notificationController() {
	return {
		sendEmail
	}

	function sendEmail(req, res) {
		notificationService.sendEmail(req.body)
			.then(notifications => res.json(notifications))
			.catch(err => res.json(err))
	}
}
