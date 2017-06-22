// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

module.exports = {
	sendEmail
}

const key = process.env.SENDGRID_KEY

function sendEmail(body) {
	var helper = require('sendgrid').mail
	var fromEmail = new helper.Email(body.email)
	var toEmail = new helper.Email('noah.a.peller@gmail.com')
	var subject = `Contact from ${body.name}`
	var content = new helper.Content('text/plain', body.content)
	var mail = new helper.Mail(fromEmail, subject, toEmail, content)

	var sg = require('sendgrid')(key)

	var request = sg.emptyRequest({
		method: 'POST',
		path: '/v3/mail/send',
		body: mail.toJSON()
	})

	return sg.API(request)
}
