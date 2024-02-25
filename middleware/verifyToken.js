const jwt = require('jsonwebtoken')
const { secretKey } = require('../config/config')
const verifytoken = (req, res, next) => {

    try {

        const token = req.cookies.authToken
        
        if (token) {

            const verified = jwt.verify(token, secretKey)

            if (verified) {

                req.authorName = verified
                next()
                return req.user
            }

        }else {

            return
        }

    } catch (error) {

        console.log(error.message)
    }
}

module.exports = { verifytoken }