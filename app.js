const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('dotenv/config')

// congig
const config = require('./helper/config');
app.set('api_secret_key',config.api_secret_key)

// db
const db = require('./helper/db')()

// middleware
const verifyToken = require('./middleware/verify-token')

app.use(bodyParser.json())

const category = require('./router/category')
const director = require('./router/director')
const movie = require('./router/movie')
const user = require('./router/user')

app.use('/api/user',user)
app.use('/api',verifyToken)
app.use('/api/category',category)
app.use('/api/director',director)
app.use('/api/movie',movie)


app.listen(process.env.PORT, () => {
    console.log(`Listening to ${process.env.PORT}`);
})
