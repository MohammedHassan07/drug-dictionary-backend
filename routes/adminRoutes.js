const express = require('express')
const {createAuthor, logInPage, logIn, insertData, getOne, adminPanel} = require('../controller/adminController')
const { verifytoken } = require('../middleware/verifyToken')

const route = express.Router()

route.post('/owner/create-author', createAuthor)

route.post('/author-log-in', logIn)

route.get('/admin', logInPage) // implement when user go back it should redirect to logIn page

route.get('/admin-panel', verifytoken,adminPanel)

route.post('/admin/insert-data', verifytoken, insertData)

route.post('/admin/get-one-blog', verifytoken, getOne)

route.post('/admin/update-data', verifytoken, getOne)

module.exports = route
