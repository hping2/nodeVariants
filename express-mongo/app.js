const express = require('express')
const mongoose = require('mongoose')

const dotenv = require('dotenv')
dotenv.config()

const uri = "mongodb://localhost/mongo-proj";
mongoose.connect(uri, { useNewUrlParser: true })
	.then(() => console.log('DB Connected'))
	.catch(() => console.log('DB Connection Failed'))

// initialize app with config options
const app = express()

// import routes
const index = require('./routes/index')
const api = require('./routes/api')

// set routes
app.use('/', index)
app.use('/api', api) // sample API Routes

const port = process.env.PORT || 3000
app.listen(port, () => {console.log(`A node JS API is listening on port: ${port}`)})
