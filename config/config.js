const PORT = 3000
const host = 'localhost'
const user = 'root'
const password = ''
const databaseName = 'drughouse'
const hashKey = 10
const secretKey = '//techBlog'

databaseConfiguration = {

    host, user, password, databaseName
}

module.exports = {

    PORT, databaseConfiguration, hashKey, secretKey
}