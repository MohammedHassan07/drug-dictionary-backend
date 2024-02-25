const express = require('express')
const cookieParser = require('cookie-parser')

const { PORT } = require('./config/config')
const DBConnection = require('./middleware/connectToDB')
const adminRoutes = require('./routes/adminRoutes')
const { drugRoute } = require('./routes/drug.routes')

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use(DBConnection)

app.listen(PORT, () => {

    console.log('Server is up at', PORT)
})

// app.use(adminRoutes)
app.use(drugRoute)