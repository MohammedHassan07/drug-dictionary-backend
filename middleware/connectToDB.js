const mysql = require('mysql')
const { databaseConfiguration } = require('../config/config')

const connection = (req, res, next) => {

    const { host, user, password, databaseName } = databaseConfiguration
    const conn = mysql.createPool({

        host: host,
        user: user,
        password: password,
        database: databaseName
    })

    conn.getConnection((error, conn) => {

        if (error) console.log(error.message)
        else {

            // console.log('DB connected')
            req.conn = conn
            next()
        }
    })
}

module.exports = connection