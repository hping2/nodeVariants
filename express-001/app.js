const express = require('express')
const {getPosts} = require('./routes/post')


const app = express();
app.get('/', getPosts)

const port = 3000
app.listen(port)
