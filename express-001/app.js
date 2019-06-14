const express = require("express")
const router = require("./routes/get")
const morgan = require("morgan")
const app = express();

// morgan middleware for logging
app.use(morgan(function (tokens, req, res) {
  return [
    "[API Server]",
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
}))

// middleware, something in the middle, such as authn/authz etc.
const myMid = (req, res, next) => {
    console.log("Middleware applied")
    next()
}
app.use(myMid)

// routes
app.use("/", router)

const port = 3000
console.log("Listening on port 3000")
app.listen(port)

