const express = require('express')

const { home, sendEmail } = require('../controller/drugController')
const { blogContent } = require('../controller/blogContent')
const drugRoute = express.Router()

drugRoute.get('/', home)

drugRoute.get('/blog-content', blogContent)

// send email to contact
drugRoute.post('/send-email', sendEmail)

module.exports = { drugRoute }